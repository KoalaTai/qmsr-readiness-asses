export type ResponseValue = 'yes' | 'partially' | 'no' | null

export interface Question {
  id: string
  area: string
  text: string
}

export interface AssessmentResponses {
  [key: string]: ResponseValue
}

export type ResultCategory = 'green' | 'yellow' | 'red'

export interface ResultData {
  category: ResultCategory
  score: number
  maxScore: number
  percentage: number
  title: string
  description: string
  actionPlan: {
    thirtyDays: string[]
    sixtyDays: string[]
    ninetyDays: string[]
  }
}

export const questions: Question[] = [
  {
    id: 'q1',
    area: 'Documented QMS',
    text: 'Do you have a written quality manual and SOPs that you keep up to date?'
  },
  {
    id: 'q2',
    area: 'CAPA',
    text: 'Do you have a formal process to find root causes, fix issues, and verify effectiveness?'
  },
  {
    id: 'q3',
    area: 'Training & Competence',
    text: 'Are people trained on their procedures with records kept up to date?'
  },
  {
    id: 'q4',
    area: 'Management Support',
    text: 'Does leadership set quality objectives and hold regular management reviews?'
  },
  {
    id: 'q5',
    area: 'Internal Audits',
    text: 'Do you perform periodic audits and close out findings to improve your QMS?'
  },
  {
    id: 'q6',
    area: 'Audit Preparedness',
    text: 'Could you handle an FDA/ISO audit on short notice with records readily available?'
  },
  {
    id: 'q7',
    area: 'Design & Risk Controls',
    text: 'Do you use design plans/reviews and integrate risk management across the lifecycle?'
  },
  {
    id: 'q8',
    area: 'Supplier Quality',
    text: 'Do you qualify, control, and monitor critical suppliers/CMOs effectively?'
  },
  {
    id: 'q9',
    area: 'Production & Process Control',
    text: 'Are processes documented/validated and equipment calibrated/maintained?'
  },
  {
    id: 'q10',
    area: 'Complaints/Feedback',
    text: 'Do you log, investigate, and trend complaints and feed improvements into the QMS?'
  },
  {
    id: 'q11',
    area: 'Continuous Improvement',
    text: 'Do you track quality metrics (e.g., CAPA, defects) and act on trends?'
  },
  {
    id: 'q12',
    area: 'QMSR Transition Prep',
    text: 'Are you actively preparing for FDA QMSR (aligned to ISO 13485) before 2026?'
  }
]

export const calculateScore = (responses: AssessmentResponses): number => {
  return Object.values(responses).reduce((total, response) => {
    if (response === 'yes') return total + 2
    if (response === 'partially') return total + 1
    return total
  }, 0)
}

export const getResultCategory = (score: number, maxScore: number): ResultCategory => {
  const percentage = (score / maxScore) * 100
  
  if (percentage >= 80) return 'green'
  if (percentage >= 45) return 'yellow'
  return 'red'
}

export const getResultData = (score: number, maxScore: number): ResultData => {
  const percentage = (score / maxScore) * 100
  const category = getResultCategory(score, maxScore)
  
  const resultContent = {
    green: {
      title: 'Green — Strong Readiness',
      description: 'Your QMS appears robust and largely aligned with QMSR/ISO 13485. Next steps focus on polish and sustaining audit-readiness.',
      actionPlan: {
        thirtyDays: [
          'Close minor "Partial" items and align terminology for QMSR',
          'Document any remaining gaps with specific owners and target dates',
          'Review and update quality manual for QMSR alignment'
        ],
        sixtyDays: [
          'Run a short mock audit to test readiness',
          'Refresh training on updated procedures',
          'Validate that all records are audit-ready and easily accessible'
        ],
        ninetyDays: [
          'Lock in cadence for internal audits and management reviews',
          'Consider ISO 13485 certification if not already certified',
          'Establish continuous monitoring metrics for sustained compliance'
        ]
      }
    },
    yellow: {
      title: 'Yellow — Partial Readiness',
      description: 'You have got a solid base, with targeted gaps to close (often CAPA effectiveness, supplier controls, or risk integration).',
      actionPlan: {
        thirtyDays: [
          'Prioritize 2-3 high-impact fixes (e.g., CAPA effectiveness, supplier controls)',
          'Assign specific owners and target completion dates',
          'Begin documentation updates for identified gaps'
        ],
        sixtyDays: [
          'Update SOPs for priority areas and conduct targeted retraining',
          'Implement tracking for 2-3 key quality metrics',
          'Strengthen supplier qualification and monitoring processes'
        ],
        ninetyDays: [
          'Run a focused internal audit on improved areas',
          'Conduct management review to assess progress and set next priorities',
          'Close all audit findings and verify effectiveness'
        ]
      }
    },
    red: {
      title: 'Red — Major Gaps Identified',
      description: 'You are early in QMS maturity. Focus on building foundational SOPs and habits—this is common for startups and SMBs.',
      actionPlan: {
        thirtyDays: [
          'Publish core SOPs: Document Control, CAPA, Complaints, Training',
          'Establish basic templates and forms for each process',
          'Assign a QMS owner/champion to drive implementation'
        ],
        sixtyDays: [
          'Train staff on core procedures and implement basic record-keeping',
          'Start CAPA and complaint logs with initial entries',
          'Conduct first management review to set quality objectives'
        ],
        ninetyDays: [
          'Expand into design control, supplier oversight, and production controls',
          'Perform first internal audit on implemented processes',
          'Develop 6-month roadmap for QMSR readiness with milestones'
        ]
      }
    }
  }
  
  return {
    category,
    score,
    maxScore,
    percentage: Math.round(percentage),
    ...resultContent[category]
  }
}

export const getResponseLabel = (response: ResponseValue): string => {
  if (response === 'yes') return 'Yes'
  if (response === 'partially') return 'Partially'
  if (response === 'no') return 'No'
  return 'Not answered'
}

export const formatResultsText = (
  responses: AssessmentResponses,
  resultData: ResultData
): string => {
  const timestamp = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  
  let text = `QMSR READINESS SNAPSHOT - RESULTS\n`
  text += `Generated: ${timestamp}\n`
  text += `\n`
  text += `═══════════════════════════════════════════════════════\n`
  text += `OVERALL SCORE: ${resultData.score}/${resultData.maxScore} (${resultData.percentage}%)\n`
  text += `READINESS LEVEL: ${resultData.title}\n`
  text += `═══════════════════════════════════════════════════════\n`
  text += `\n`
  text += `${resultData.description}\n`
  text += `\n`
  text += `───────────────────────────────────────────────────────\n`
  text += `GAP ANALYSIS BY AREA\n`
  text += `───────────────────────────────────────────────────────\n`
  text += `\n`
  
  questions.forEach((q) => {
    const response = responses[q.id]
    text += `${q.area}: ${getResponseLabel(response)}\n`
  })
  
  text += `\n`
  text += `───────────────────────────────────────────────────────\n`
  text += `30/60/90-DAY ACTION PLAN\n`
  text += `───────────────────────────────────────────────────────\n`
  text += `\n`
  text += `30 DAYS (Quick Wins):\n`
  resultData.actionPlan.thirtyDays.forEach((item, i) => {
    text += `  ${i + 1}. ${item}\n`
  })
  text += `\n`
  text += `60 DAYS (Build Momentum):\n`
  resultData.actionPlan.sixtyDays.forEach((item, i) => {
    text += `  ${i + 1}. ${item}\n`
  })
  text += `\n`
  text += `90 DAYS (Achieve Readiness):\n`
  resultData.actionPlan.ninetyDays.forEach((item, i) => {
    text += `  ${i + 1}. ${item}\n`
  })
  text += `\n`
  text += `───────────────────────────────────────────────────────\n`
  text += `\n`
  text += `Need help executing this plan?\n`
  text += `Book a consultation: https://qms.coach/book\n`
  text += `\n`
  text += `Generated by QMSR Readiness Snapshot | QMS.Coach\n`
  
  return text
}
