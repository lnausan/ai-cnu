"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function HerramientasClient() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-muted/50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-heading">
                Interacción
              </h1>
            </div>
          </div>
        </div>

        {/* Padlet Embed */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div 
              className="padlet-embed rounded-lg shadow-lg overflow-hidden"
              style={{
                border: "1px solid rgba(0,0,0,0.1)",
                borderRadius: "8px",
                boxSizing: "border-box",
                overflow: "hidden",
                position: "relative",
                width: "100%",
                background: "#F4F4F4"
              }}
            >
              <p style={{ padding: 0, margin: 0 }}>
                <iframe 
                  src="https://padlet.com/embed/66pxhzrays0j49i" 
                  frameBorder="0" 
                  allow="camera;microphone;geolocation;display-capture;clipboard-write" 
                  style={{
                    width: "100%",
                    height: "608px",
                    display: "block",
                    padding: 0,
                    margin: 0
                  }}
                  title="Padlet de Interacción"
                />
              </p>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                margin: 0,
                height: "28px"
              }}>
                <a 
                  href="https://padlet.com?ref=embed" 
                  style={{
                    display: "block",
                    flexGrow: 0,
                    margin: 0,
                    border: "none",
                    padding: 0,
                    textDecoration: "none"
                  }} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img 
                      src="https://padlet.net/embeds/made_with_padlet_2022.png" 
                      width="114" 
                      height="28" 
                      style={{
                        padding: 0,
                        margin: 0,
                        background: "0 0",
                        border: "none",
                        boxShadow: "none"
                      }} 
                      alt="Criado com o Padlet"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

