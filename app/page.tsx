import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Doublement Aliéné - Accueil',
  description: 'Plateforme théâtrale collaborative - Prototype de performance dans un espace public',
}

export default function HomePage() {
  return (
    <div className="theater-container py-12">
      <section className="mb-12">
        <h1 className="text-3xl font-semibold mb-4 text-theater-text">
          Pièce de Théâtre: «Doublement Aliéné»
        </h1>
        <p className="text-lg text-theater-muted mb-6 max-w-2xl">
          Plateforme théâtrale collaborative explorant l&apos;aliénation contemporaine à travers la performance expérimentale et les technologies décentralisées.
        </p>
        <div className="bg-theater-muted/10 border-l-4 border-theater-muted/30 pl-4 py-2 mb-8">
          <p className="text-theater-muted">
            <strong>Interface Web:</strong> Plateforme collaborative en développement actif
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-medium mb-6 text-theater-text">Sections</h2>
        <div className="space-y-3">
          <div><Link href="/performance" className="text-theater-text hover:underline">Performance</Link> — Découvrez les représentations et enregistrements de la pièce</div>
          <div><Link href="/gallery" className="text-theater-text hover:underline">Galerie</Link> — Explorez les contenus visuels et créations artistiques</div>
          <div><Link href="/research" className="text-theater-text hover:underline">Recherche</Link> — Laboratoire de recherche artistique et méthodologies IA</div>
          <div><Link href="/timeline" className="text-theater-text hover:underline">Chronologie</Link> — Suivez l&apos;évolution du projet depuis sa conception</div>
          <div><Link href="/about" className="text-theater-text hover:underline">À Propos</Link> — Informations sur le projet, CIFAS et philosophie collaborative</div>
        </div>
      </section>
    </div>
  )
}
