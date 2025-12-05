// src/components/Consent.jsx
import React, { useEffect, useState } from 'react'

export default function Consent({ plausibleDomain = '', gaMeasurementId = '' }) {
  const [consent, setConsent] = useState(null)

  useEffect(() => {
    try {
      const s = localStorage.getItem('analytics-consent')
      if (s) setConsent(s)
    } catch (e) {}
  }, [])

  useEffect(() => {
    if (consent === 'yes') {
      // Plausible
      if (plausibleDomain) {
        const s = document.createElement('script')
        s.src = 'https://plausible.io/js/plausible.js'
        s.defer = true
        s.setAttribute('data-domain', plausibleDomain)
        document.head.appendChild(s)
      }
      // GA4
      if (gaMeasurementId) {
        const s1 = document.createElement('script'); s1.async = true
        s1.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`
        document.head.appendChild(s1)
        window.dataLayer = window.dataLayer || []
        function gtag(){window.dataLayer.push(arguments)}
        window.gtag = gtag
        gtag('js', new Date())
        gtag('config', gaMeasurementId, { anonymize_ip: true })
      }
    }
  }, [consent, plausibleDomain, gaMeasurementId])

  if (consent) return null
  return (
    <div className="fixed bottom-6 right-6 z-60 glass p-4 rounded-lg shadow-lg max-w-sm">
      <div className="text-sm">We use analytics to improve the site. Accept analytics?</div>
      <div className="mt-3 flex gap-2">
        <button className="ribbon" onClick={()=>{ localStorage.setItem('analytics-consent','yes'); setConsent('yes'); window.location.reload() }}>Accept</button>
        <button className="glass" onClick={()=>{ localStorage.setItem('analytics-consent','no'); setConsent('no') }}>Decline</button>
      </div>
    </div>
  )
}
