import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import QRCode from 'qrcode'
import { useAccess } from '../context/AccessContext'
import './ScanPage.css'

const DEPLOY_URL = 'https://shraddhapatil1997.github.io/cafe-menu/?access=1'

export default function ScanPage() {
  const navigate = useNavigate()
  const { unlocked, grantAccess } = useAccess()
  const [qrDataUrl, setQrDataUrl] = useState('')

  useEffect(() => {
    if (unlocked) {
      navigate('/', { replace: true })
    }
  }, [unlocked, navigate])

  useEffect(() => {
    QRCode.toDataURL(DEPLOY_URL, { width: 360 })
      .then(setQrDataUrl)
      .catch(() => setQrDataUrl(''))
  }, [])

  function handleScan() {
    grantAccess()
    navigate('/', { replace: true })
  }

  return (
    <section className="scan">
      <header className="pageHeader">
        <h2>Scan the Cafe QR Code</h2>
        <p>Use your phone camera to scan the QR code below and start your order.</p>
      </header>

      <div className="scan__card">
        <div className="scan__qrImage" aria-hidden>
          {qrDataUrl ? (
            <img src={qrDataUrl} alt="Cafe QR code" />
          ) : (
            <div className="scan__qrPlaceholder">Generating…</div>
          )}
        </div>
        <p className="scan__hint">Point your phone camera here to scan.</p>

        <button className="button button--primary" onClick={handleScan}>
          I scanned the QR code
        </button>
      </div>
    </section>
  )
}
