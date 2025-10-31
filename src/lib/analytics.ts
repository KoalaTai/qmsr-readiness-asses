export interface AnalyticsEvent {
  event: string
  timestamp: number
  properties?: Record<string, unknown>
}

export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
  try {
    const event: AnalyticsEvent = {
      event: eventName,
      timestamp: Date.now(),
      properties
    }
    
    const existingEvents = localStorage.getItem('qmsr_analytics')
    const events: AnalyticsEvent[] = existingEvents ? JSON.parse(existingEvents) : []
    events.push(event)
    
    const maxEvents = 100
    const trimmedEvents = events.slice(-maxEvents)
    localStorage.setItem('qmsr_analytics', JSON.stringify(trimmedEvents))
  } catch (error) {
    console.error('Analytics tracking error:', error)
  }
}

export const getAnalytics = (): AnalyticsEvent[] => {
  try {
    const existingEvents = localStorage.getItem('qmsr_analytics')
    return existingEvents ? JSON.parse(existingEvents) : []
  } catch (error) {
    console.error('Analytics retrieval error:', error)
    return []
  }
}

export const clearAnalytics = () => {
  try {
    localStorage.removeItem('qmsr_analytics')
  } catch (error) {
    console.error('Analytics clear error:', error)
  }
}

export const getAnalyticsSummary = () => {
  const events = getAnalytics()
  const summary = {
    totalEvents: events.length,
    assessmentStarts: events.filter(e => e.event === 'assessment_started').length,
    assessmentCompletions: events.filter(e => e.event === 'assessment_completed').length,
    resultsByCategory: {
      green: events.filter(e => e.event === 'assessment_completed' && e.properties?.category === 'green').length,
      yellow: events.filter(e => e.event === 'assessment_completed' && e.properties?.category === 'yellow').length,
      red: events.filter(e => e.event === 'assessment_completed' && e.properties?.category === 'red').length
    },
    dropoffRate: 0
  }
  
  if (summary.assessmentStarts > 0) {
    summary.dropoffRate = Math.round(((summary.assessmentStarts - summary.assessmentCompletions) / summary.assessmentStarts) * 100)
  }
  
  return summary
}
