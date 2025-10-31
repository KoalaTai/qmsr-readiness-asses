import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Toaster } from '@/components/ui/sonner'
import {
  CheckCircle,
  WarningCircle,
  XCircle,
  Printer,
  Copy,
  ArrowClockwise,
  Phone
} from '@phosphor-icons/react'
import { toast } from 'sonner'
import {
  questions,
  calculateScore,
  getResultData,
  getResponseLabel,
  formatResultsText,
  type AssessmentResponses,
  type ResponseValue,
  type ResultData
} from '@/lib/assessment-data'

function App() {
  const [responses, setResponses] = useState<AssessmentResponses>(
    questions.reduce((acc, q) => ({ ...acc, [q.id]: null }), {})
  )
  const [showResults, setShowResults] = useState(false)
  const [resultData, setResultData] = useState<ResultData | null>(null)

  const allQuestionsAnswered = Object.values(responses).every((r) => r !== null)
  const answeredCount = Object.values(responses).filter((r) => r !== null).length

  const handleResponseChange = (questionId: string, value: ResponseValue) => {
    setResponses((prev) => ({ ...prev, [questionId]: value }))
  }

  const handleSubmit = () => {
    const score = calculateScore(responses)
    const maxScore = questions.length * 2
    const data = getResultData(score, maxScore)
    setResultData(data)
    setShowResults(true)
    
    setTimeout(() => {
      document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const handleReset = () => {
    setResponses(questions.reduce((acc, q) => ({ ...acc, [q.id]: null }), {}))
    setShowResults(false)
    setResultData(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handlePrint = () => {
    window.print()
  }

  const handleCopy = () => {
    if (!resultData) return
    const text = formatResultsText(responses, resultData)
    navigator.clipboard.writeText(text)
    toast.success('Results copied to clipboard!')
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'green':
        return <CheckCircle className="w-6 h-6" weight="fill" />
      case 'yellow':
        return <WarningCircle className="w-6 h-6" weight="fill" />
      case 'red':
        return <XCircle className="w-6 h-6" weight="fill" />
      default:
        return null
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'green':
        return 'bg-result-green text-result-green-foreground'
      case 'yellow':
        return 'bg-result-yellow text-result-yellow-foreground'
      case 'red':
        return 'bg-result-red text-result-red-foreground'
      default:
        return ''
    }
  }

  return (
    <>
      <Toaster />
      <div className="min-h-screen bg-background py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-3">
            QMSR Readiness Snapshot
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Answer 12 quick questions to see if your QMS is on track for FDA QMSR (aligned to ISO
            13485). Get instant Red/Yellow/Green results with a 30/60/90-day plan.
          </p>
        </header>

        <Card className="p-6 md:p-8 mb-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">
                Progress: {answeredCount} of {questions.length} questions
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                {Math.round((answeredCount / questions.length) * 100)}%
              </span>
            </div>
            <Progress value={(answeredCount / questions.length) * 100} className="h-2" />
          </div>

          <div className="space-y-8">
            {questions.map((question, index) => (
              <div key={question.id} className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{question.area}</p>
                  <Label htmlFor={question.id} className="text-base font-medium text-foreground">
                    {index + 1}. {question.text}
                  </Label>
                </div>
                <RadioGroup
                  id={question.id}
                  value={responses[question.id] || ''}
                  onValueChange={(value) => handleResponseChange(question.id, value as ResponseValue)}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <div className="flex items-center space-x-2 border border-border rounded-lg px-4 py-3 hover:bg-secondary/50 transition-colors cursor-pointer flex-1">
                    <RadioGroupItem value="yes" id={`${question.id}-yes`} />
                    <Label
                      htmlFor={`${question.id}-yes`}
                      className="cursor-pointer flex-1 font-normal"
                    >
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border border-border rounded-lg px-4 py-3 hover:bg-secondary/50 transition-colors cursor-pointer flex-1">
                    <RadioGroupItem value="partially" id={`${question.id}-partially`} />
                    <Label
                      htmlFor={`${question.id}-partially`}
                      className="cursor-pointer flex-1 font-normal"
                    >
                      Partially
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border border-border rounded-lg px-4 py-3 hover:bg-secondary/50 transition-colors cursor-pointer flex-1">
                    <RadioGroupItem value="no" id={`${question.id}-no`} />
                    <Label
                      htmlFor={`${question.id}-no`}
                      className="cursor-pointer flex-1 font-normal"
                    >
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              size="lg"
              onClick={handleSubmit}
              disabled={!allQuestionsAnswered}
              className="min-w-48"
            >
              Calculate Results
            </Button>
          </div>
        </Card>

        <AnimatePresence>
          {showResults && resultData && (
            <motion.div
              id="results-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6 md:p-8 print-break-inside-avoid">
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    <Badge
                      className={`${getCategoryColor(resultData.category)} text-lg px-4 py-2 flex items-center gap-2`}
                    >
                      {getCategoryIcon(resultData.category)}
                      {resultData.title}
                    </Badge>
                  </div>
                  <div className="mb-4">
                    <div className="text-5xl font-semibold text-foreground mb-2">
                      {resultData.percentage}%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Score: {resultData.score} out of {resultData.maxScore} points
                    </div>
                  </div>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="origin-left"
                  >
                    <Progress
                      value={resultData.percentage}
                      className={`h-3 ${resultData.category === 'green' ? '[&>div]:bg-result-green' : resultData.category === 'yellow' ? '[&>div]:bg-result-yellow' : '[&>div]:bg-result-red'}`}
                    />
                  </motion.div>
                </div>

                <p className="text-center text-base text-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  {resultData.description}
                </p>

                <Separator className="my-8" />

                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">
                    30/60/90-Day Action Plan
                  </h2>

                  <div className="space-y-6">
                    <div className="print-break-inside-avoid">
                      <h3 className="text-lg font-medium text-foreground mb-3 flex items-center gap-2">
                        <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                          30
                        </span>
                        Quick Wins
                      </h3>
                      <ul className="space-y-2 ml-10">
                        {resultData.actionPlan.thirtyDays.map((item, index) => (
                          <li key={index} className="text-foreground leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="print-break-inside-avoid">
                      <h3 className="text-lg font-medium text-foreground mb-3 flex items-center gap-2">
                        <span className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                          60
                        </span>
                        Build Momentum
                      </h3>
                      <ul className="space-y-2 ml-10">
                        {resultData.actionPlan.sixtyDays.map((item, index) => (
                          <li key={index} className="text-foreground leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="print-break-inside-avoid">
                      <h3 className="text-lg font-medium text-foreground mb-3 flex items-center gap-2">
                        <span className="bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                          90
                        </span>
                        Achieve Readiness
                      </h3>
                      <ul className="space-y-2 ml-10">
                        {resultData.actionPlan.ninetyDays.map((item, index) => (
                          <li key={index} className="text-foreground leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <Separator className="my-8" />

                <div className="mb-8 print-break-before">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Gap Analysis</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {questions.map((q) => (
                      <div
                        key={q.id}
                        className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 border border-border"
                      >
                        <span className="text-sm font-medium text-foreground">{q.area}</span>
                        <Badge
                          variant={
                            responses[q.id] === 'yes'
                              ? 'default'
                              : responses[q.id] === 'partially'
                                ? 'secondary'
                                : 'outline'
                          }
                          className="text-xs"
                        >
                          {getResponseLabel(responses[q.id])}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 no-print">
                  <Button size="lg" className="flex-1" asChild>
                    <a href="https://qms.coach/book" target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2" />
                      Book a Call
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" onClick={handlePrint}>
                    <Printer className="mr-2" />
                    Print / Save PDF
                  </Button>
                  <Button size="lg" variant="outline" onClick={handleCopy}>
                    <Copy className="mr-2" />
                    Copy Results
                  </Button>
                  <Button size="lg" variant="outline" onClick={handleReset}>
                    <ArrowClockwise className="mr-2" />
                    Reset
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        <footer className="mt-12 text-center text-sm text-muted-foreground no-print">
          <p>
            QMSR Readiness Snapshot | QMS.Coach
            <br />
            Free tool to help startups and SMBs prepare for FDA QMSR alignment with ISO 13485
          </p>
        </footer>
      </div>
      </div>
    </>
  )
}

export default App
