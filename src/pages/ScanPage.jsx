import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAccess } from '../context/AccessContext'
import './ScanPage.css'

export default function ScanPage() {
  const navigate = useNavigate()
  const { unlocked, grantAccess } = useAccess()

  useEffect(() => {
    if (unlocked) {
      navigate('/', { replace: true })
    }
  }, [unlocked, navigate])

  function handleScan() {
    grantAccess()
    navigate('/', { replace: true })
  }

  return (
    <section className="scan">
      <header className="pageHeader">
        <h2>Scan to access the menu</h2>
        <p>Use the cafe QR scanner to unlock the menu and start ordering.</p>
      </header>

      <div className="scan__card">
        <div className="scan__preview" aria-hidden>
          <div className="scan__qr">
            <div className="scan__dot" />
            <div className="scan__dot" />
            <div className="scan__dot" />
            <div className="scan__grid" />
          </div>
          <p className="scan__hint">Place your phone over the QR code</p>
        </div>

        <button className="button button--primary" onClick={handleScan}>
          I scanned the QR code
        </button>
      </div>
    </section>
  )
}
