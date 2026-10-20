'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="heading-page font-bold mb-6">Kontakt</h1>
          <p className="text-xl text-muted-foreground mb-16 leading-relaxed max-w-3xl">
            Haben Sie Fragen oder möchten Sie ein Probetraining vereinbaren? Kontaktieren Sie uns – wir freuen uns auf Ihre Nachricht!
          </p>

          {/* Der Weg zum Club – YouTube Video */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Der Weg zum Club</h2>
            <p className="text-muted-foreground mb-6">
              Noch nie bei uns gewesen? Dieses Video zeigt dir den Weg vom Parkplatz direkt zu unserem Boxclub.
            </p>
            <div className="aspect-video rounded-xl overflow-hidden border border-border">
              <iframe
                src="https://www.youtube.com/embed/ddU7gUJon2E"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title="Der Weg vom Parkplatz zum Boxing Club"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="bg-card text-card-foreground border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">Kontaktinformationen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adresse</h3>
                      <p className="text-muted-foreground">
                        KSL Boxing Lahr<br />
                        Dinglingerhauptstr. 87<br />
                        77933 Lahr/Schwarzwald
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telefon</h3>
                      <a href="tel:+4978215020962" className="text-muted-foreground hover:text-primary transition-colors duration-200">+49 7821 502 09 62</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">E-Mail</h3>
                      <a href="mailto:info@ksl-boxing.com" className="text-muted-foreground hover:text-primary transition-colors duration-200">info@ksl-boxing.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Trainingszeiten</h3>
                      <p className="text-muted-foreground">
                        Montag &amp; Donnerstag: 17:30 - 20:30 Uhr<br />
                        Dienstag: 18:00 - 20:30 Uhr<br />
                        Mittwoch &amp; Freitag: 19:00 - 20:30 Uhr<br />
                        Samstag &amp; Sonntag: kein Training
                      </p>
                      <a href="/training-times" className="text-sm text-primary hover:underline">
                        Alle Gruppen und Zeiten
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card text-card-foreground border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">Standort</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src="https://maps.google.com/maps?q=Dinglingerhauptstr.+87,+77933+Lahr&t=&z=16&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="KSL Boxing Lahr Standort"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
