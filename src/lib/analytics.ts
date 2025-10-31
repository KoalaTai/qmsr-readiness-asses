export interface AnalyticsEvent {
  event: string
  timestamp: number
  properties?: Record<string, unknown>
}

export const trackEvent = async (eventName: string, properties?: Record<string, unknown>) => {
  try {
    const event: AnalyticsEvent = {
      event: eventName,
      timestamp: Date.now(),
      properties
    }
    
    const events = await window.spark.kv.get<AnalyticsEvent[]>('qmsr_analytics') ?? []
    events.push(event)
    
    const maxEvents = 100
    const trimmedEvents = events.slice(-maxEvents)
    await window.spark.kv.set('qmsr_analytics', trimmedEvents)
  } catch (error) {
    console.error('Analytics tracking error:', error)
  }
}

export const getAnalytics = async (): Promise<AnalyticsEvent[]> => {
  try {
    return await window.spark.kv.get<AnalyticsEvent[]>('qmsr_analytics') ?? []
  } catch (error) {
    console.error('Analytics retrieval error:', error)
    return []
  }
}

export const clearAnalytics = async () => {
  try {
    await window.spark.kv.delete('qmsr_analytics')
  } catch (error) {
    console.error('Analytics clear error:', error)
  }
}

export const getAnalyticsSummary = async () => {
  const events = await getAnalytics()
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
