import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { format } from "date-fns";

import {
    Assessment,
    Recommendation,
} from "@/types/assessment";

const PAGE_WIDTH = 210;
const PAGE_HEIGHT = 297;
const PAGE_MARGIN = 15;

const PRIMARY: [number, number, number] = [
    16,
    185,
    129,
];

const DARK: [number, number, number] = [
    31,
    41,
    55,
];

const LIGHT: [number, number, number] = [
    100,
    116,
    139,
];

const BORDER: [number, number, number] = [
    226,
    232,
    240,
];

const SOFT_BG: [number, number, number] = [
    248,
    250,
    252,
];

interface ReportStudent {
    full_name: string;
    student_id: string;
    university: string;
    department: string;
    semester: string;
}

function loadImage(src: string): Promise<string> {
    return fetch(src)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Image not found");
            }

            return res.blob();
        })
        .then(
            (blob) =>
                new Promise((resolve, reject) => {
                    const reader = new FileReader();

                    reader.onloadend = () => {
                        resolve(reader.result as string);
                    };

                    reader.onerror = () => {
                        reject(
                            new Error("Failed to read image")
                        );
                    };

                    reader.readAsDataURL(blob);
                })
        );
}

function addTitle(
    pdf: jsPDF,
    text: string,
    y: number,
    size = 13
) {
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(size);
    pdf.setTextColor(...DARK);

    pdf.text(
        text,
        PAGE_MARGIN,
        y
    );
}

function formatDate(date: string) {
    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
        return format(
            new Date(),
            "dd MMM yyyy"
        );
    }

    return format(
        parsedDate,
        "dd MMM yyyy"
    );
}

function getRiskScore(score: number) {
    if (!Number.isFinite(score)) {
        return 0;
    }

    return Math.max(
        0,
        Math.min(100, Math.round(score))
    );
}

function getStudentValue(
    value: string | undefined,
    fallback = "Not provided"
) {
    const trimmed = value?.trim();

    return trimmed
        ? trimmed
        : fallback;
}

export async function generateAssessmentReport(
    assessment: Assessment,
    student: ReportStudent
) {
    const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
    });

    let y = 15;

    /*
    ===================================
    HEADER
    ===================================
    */

    let logo: string | null = null;

    try {
        logo = await loadImage(
            "/images/bubt-logo.png"
        );
    } catch {
        console.log(
            "BUBT logo could not be loaded."
        );
    }

    pdf.setFillColor(...SOFT_BG);

    pdf.rect(
        0,
        0,
        PAGE_WIDTH,
        38,
        "F"
    );

    if (logo) {
        pdf.addImage(
            logo,
            "PNG",
            PAGE_MARGIN,
            7,
            20,
            20
        );
    }

    /*
    University
    */

    pdf.setFont(
        "helvetica",
        "bold"
    );

    pdf.setFontSize(14);

    pdf.setTextColor(...DARK);

    pdf.text(
        "Bangladesh University of Business & Technology",
        42,
        12
    );

    /*
    Department
    */

    pdf.setFont(
        "helvetica",
        "normal"
    );

    pdf.setFontSize(9);

    pdf.text(
        "Department of Computer Science & Engineering",
        42,
        18
    );

    /*
    Project name
    */

    pdf.setFont(
        "helvetica",
        "bold"
    );

    pdf.setFontSize(12);

    pdf.setTextColor(...PRIMARY);

    pdf.text(
        "PsychoMentalHub",
        42,
        27
    );

    /*
    Report type
    */

    pdf.setFont(
        "helvetica",
        "normal"
    );

    pdf.setFontSize(8);

    pdf.setTextColor(...LIGHT);

    pdf.text(
        "AI Mental Wellness Assessment Report",
        42,
        33
    );

    y = 48;

    /*
    ===================================
    REPORT TITLE
    ===================================
    */

    addTitle(
        pdf,
        "Student Wellness Summary Report",
        y,
        16
    );

    y += 7;

    pdf.setFont(
        "helvetica",
        "normal"
    );

    pdf.setFontSize(9);

    pdf.setTextColor(...LIGHT);

    pdf.text(
        "AI-assisted wellness evaluation for student self-awareness.",
        PAGE_MARGIN,
        y
    );

    y += 10;

    /*
    ===================================
    STUDENT INFORMATION
    ===================================
    */

    addTitle(
        pdf,
        "Student Information",
        y
    );

    y += 5;

    autoTable(pdf, {
        startY: y,

        body: [
            [
                "Name",
                getStudentValue(
                    student.full_name
                ),
            ],
            [
                "Student ID",
                getStudentValue(
                    student.student_id
                ),
            ],
            [
                "Department",
                getStudentValue(
                    student.department
                ),
            ],
            [
                "Semester",
                getStudentValue(
                    student.semester
                ),
            ],
            [
                "University",
                getStudentValue(
                    student.university
                ),
            ],
        ],

        theme: "grid",

        styles: {
            fontSize: 8,
            cellPadding: 3,
            textColor: DARK,
        },

        headStyles: {
            fillColor: PRIMARY,
            textColor: 255,
        },

        columnStyles: {
            0: {
                cellWidth: 35,
                fontStyle: "bold",
            },

            1: {
                cellWidth: 120,
            },
        },

        tableWidth: 155,

        margin: {
            left: PAGE_MARGIN,
            right: PAGE_MARGIN,
        },
    });

    y =
        (pdf as any)
            .lastAutoTable
            .finalY + 8;

    /*
    ===================================
    ASSESSMENT OVERVIEW
    ===================================
    */

    addTitle(
        pdf,
        "Assessment Overview",
        y
    );

    y += 5;

    const riskScore = getRiskScore(
        Number(assessment.score)
    );

    autoTable(pdf, {
        startY: y,

        head: [
            [
                "Risk Score",
                "Mental State",
                "Confidence",
            ],
        ],

        body: [
            [
                `${riskScore}/100`,
                assessment.mental_state ||
                    "Not available",
                `${assessment.confidence ?? 0}%`,
            ],
        ],

        theme: "grid",

        headStyles: {
            fillColor: PRIMARY,
            textColor: 255,
            halign: "center",
        },

        bodyStyles: {
            textColor: DARK,
        },

        styles: {
            fontSize: 9,
            cellPadding: 4,
            halign: "center",
        },

        margin: {
            left: PAGE_MARGIN,
            right: PAGE_MARGIN,
        },
    });

    y =
        (pdf as any)
            .lastAutoTable
            .finalY + 3;

    /*
    Risk score explanation
    */

    pdf.setFont(
        "helvetica",
        "italic"
    );

    pdf.setFontSize(7.5);

    pdf.setTextColor(...LIGHT);

    pdf.text(
        "Higher scores indicate higher reported wellness risk based on assessment responses.",
        PAGE_MARGIN,
        y + 4
    );

    y += 12;

    /*
    ===================================
    AI WELLNESS SUMMARY
    ===================================
    */

    addTitle(
        pdf,
        "AI Wellness Summary",
        y
    );

    y += 6;

    pdf.setFont(
        "helvetica",
        "normal"
    );

    pdf.setFontSize(9);

    pdf.setTextColor(...DARK);

    const summary =
        (
            assessment.ai_summary ??
            "No AI summary is available for this assessment."
        )
            .trim()
            .substring(
                0,
                500
            );

    const summaryLines =
        pdf.splitTextToSize(
            summary,
            PAGE_WIDTH -
                PAGE_MARGIN * 2
        );

    pdf.text(
        summaryLines,
        PAGE_MARGIN,
        y
    );

    y +=
        summaryLines.length * 4 +
        8;

    /*
    ===================================
    KEY INSIGHTS
    ===================================
    */

    addTitle(
        pdf,
        "Wellness Insights",
        y
    );

    y += 5;

    if (assessment.ai_analysis) {
        const insights = [
            {
                area: "Stress",
                level:
                    assessment.ai_analysis
                        .stress?.level,
            },
            {
                area: "Anxiety",
                level:
                    assessment.ai_analysis
                        .anxiety?.level,
            },
            {
                area: "Depression",
                level:
                    assessment.ai_analysis
                        .depression?.level,
            },
            {
                area: "Burnout",
                level:
                    assessment.ai_analysis
                        .burnout?.level,
            },
            {
                area: "Sleep",
                level:
                    assessment.ai_analysis
                        .sleep?.level,
            },
            {
                area: "Focus",
                level:
                    assessment.ai_analysis
                        .focus?.level,
            },
            {
                area: "Social",
                level:
                    assessment.ai_analysis
                        .social?.level,
            },
        ].filter(
            (item) =>
                item.level &&
                String(item.level).trim()
        );

        if (insights.length > 0) {
            autoTable(pdf, {
                startY: y,

                head: [
                    [
                        "Area",
                        "Level",
                    ],
                ],

                body: insights.map(
                    (item) => [
                        item.area,
                        item.level,
                    ]
                ),

                theme: "grid",

                headStyles: {
                    fillColor: PRIMARY,
                    textColor: 255,
                    halign: "center",
                },

                bodyStyles: {
                    textColor: DARK,
                },

                styles: {
                    fontSize: 8,
                    cellPadding: 3,
                },

                columnStyles: {
                    0: {
                        cellWidth: 70,
                        fontStyle: "bold",
                    },

                    1: {
                        cellWidth: 70,
                        halign: "center",
                    },
                },

                tableWidth: 140,

                margin: {
                    left: PAGE_MARGIN,
                    right: PAGE_MARGIN,
                },
            });

            y =
                (pdf as any)
                    .lastAutoTable
                    .finalY + 8;
        } else {
            pdf.setFont(
                "helvetica",
                "normal"
            );

            pdf.setFontSize(9);

            pdf.setTextColor(...LIGHT);

            pdf.text(
                "No detailed wellness insights are available.",
                PAGE_MARGIN,
                y
            );

            y += 10;
        }
    } else {
        pdf.setFont(
            "helvetica",
            "normal"
        );

        pdf.setFontSize(9);

        pdf.setTextColor(...LIGHT);

        pdf.text(
            "No detailed wellness insights are available.",
            PAGE_MARGIN,
            y
        );

        y += 10;
    }

    /*
    ===================================
    RECOMMENDATIONS
    ===================================
    */

    addTitle(
        pdf,
        "Recommended Wellness Actions",
        y
    );

    y += 6;

    pdf.setFont(
        "helvetica",
        "normal"
    );

    pdf.setFontSize(9);

    pdf.setTextColor(...DARK);

    const recommendations =
        assessment.recommendations ??
        [];

    if (recommendations.length === 0) {
        pdf.setTextColor(...LIGHT);

        pdf.text(
            "No recommendations are available.",
            PAGE_MARGIN,
            y
        );

        y += 5;
    } else {
        recommendations
            .slice(0, 3)
            .forEach(
                (
                    item: Recommendation,
                    index: number
                ) => {
                    const text =
                        `${index + 1}. ${item.title}`;

                    const lines =
                        pdf.splitTextToSize(
                            text,
                            PAGE_WIDTH -
                                PAGE_MARGIN * 2
                        );

                    pdf.text(
                        lines,
                        PAGE_MARGIN,
                        y
                    );

                    y +=
                        lines.length * 4 +
                        2;
                }
            );
    }

    /*
    ===================================
    DISCLAIMER
    ===================================
    */

    y += 5;

    pdf.setDrawColor(...BORDER);

    pdf.line(
        PAGE_MARGIN,
        y,
        PAGE_WIDTH - PAGE_MARGIN,
        y
    );

    y += 7;

    pdf.setFont(
        "helvetica",
        "italic"
    );

    pdf.setFontSize(7);

    pdf.setTextColor(...LIGHT);

    const disclaimer =
        "This AI-assisted report is intended for educational and self-awareness purposes only. It is not a medical diagnosis and should not replace professional mental health advice.";

    const disclaimerLines =
        pdf.splitTextToSize(
            disclaimer,
            PAGE_WIDTH -
                PAGE_MARGIN * 2
        );

    pdf.text(
        disclaimerLines,
        PAGE_MARGIN,
        y
    );

    /*
    ===================================
    FOOTER
    ===================================
    */

    pdf.setFont(
        "helvetica",
        "normal"
    );

    pdf.setFontSize(8);

    pdf.setTextColor(...LIGHT);

    pdf.text(
        "PsychoMentalHub • BUBT Student Wellness Assessment",
        PAGE_MARGIN,
        PAGE_HEIGHT - 9
    );

    pdf.text(
        formatDate(
            new Date().toISOString()
        ),
        PAGE_WIDTH - PAGE_MARGIN,
        PAGE_HEIGHT - 9,
        {
            align: "right",
        }
    );

    /*
    ===================================
    SAVE PDF
    ===================================
    */

    pdf.save(
        `PsychoMentalHub_Report_${assessment.id}.pdf`
    );
}