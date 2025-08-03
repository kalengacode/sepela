"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  ShoppingBag,
} from "lucide-react";

// Données des activités
const activities = [
  {
    id: 1,
    title: "Tournoi Gaming",
    time: "10h00 - 17h00",
    location: "Zone Gaming",
    description: "Compétitions de jeux vidéo avec des prix à gagner pour les meilleurs joueurs.",
    icon: "🎮",
    participants: "16 joueurs max",
    day: "Jour 1"
  },
  {
    id: 2,
    title: "Concert Gospel",
    time: "19h00 - 21h00",
    location: "Scène Principale",
    description: "Soirée de louange avec nos artistes locaux et invités spéciaux.",
    icon: "🎵",
    participants: "Ouvert à tous",
    day: "Jour 1"
  },
  {
    id: 3,
    title: "Atelier Créatif",
    time: "14h00 - 16h00",
    location: "Espace Artisanat",
    description: "Découvrez et créez avec des artisans locaux dans une ambiance conviviale.",
    icon: "🎨",
    participants: "20 personnes max",
    day: "Jour 2"
  },
  {
    id: 4,
    title: "Dégustation Culinaire",
    time: "12h00 - 14h00",
    location: "Zone Restauration",
    description: "Savourez les spécialités locales préparées par nos chefs partenaires.",
    icon: "🍽️",
    participants: "Ouvert à tous",
    day: "Jour 2"
  }
];

// Données des artistes
const artists = [
  {
    id: 1,
    name: "Groupe Harmony",
    genre: "Gospel",
    image: "/images/artist1.jpg",
    description: "Un groupe de gospel reconnu pour ses harmonies puissantes et ses messages inspirants."
  },
  {
    id: 2,
    name: "DJ Spirit",
    genre: "Musique Électronique",
    image: "/images/artist2.jpg",
    description: "DJ spécialisé dans la musique électronique avec une touche spirituelle unique."
  },
  {
    id: 3,
    name: "Les Voix d&apos;Espoir",
    genre: "Chorale",
    image: "/images/artist3.jpg",
    description: "Chorale communautaire qui touche les cœurs avec des chants traditionnels et modernes."
  }
];

// Données des stands
const stands = [
  {
    id: 1,
    name: "Stand Artisanat Local",
    price: 70,
    description: "Espace pour exposer et vendre vos créations artisanales locales.",
    features: ["Table fournie", "Électricité", "Emplacement premium"]
  },
  {
    id: 2,
    name: "Stand Restauration",
    price: 70,
    description: "Parfait pour les entrepreneurs culinaires et les spécialités locales.",
    features: ["Point d&apos;eau", "Électricité", "Zone de préparation"]
  },
  {
    id: 3,
    name: "Stand Produits",
    price: 70,
    description: "Idéal pour la vente de produits divers et merchandising.",
    features: ["Vitrine sécurisée", "Éclairage", "Stockage"]
  }
];

// Composant pour les cartes d'activités
const ActivityCard = ({ activity }: { activity: typeof activities[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="group"
  >
    <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-200 bg-white">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-3xl">{activity.icon}</span>
          <Badge variant="secondary" className="bg-amber-100 text-amber-800">
            {activity.day}
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors">
          {activity.title}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {activity.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="w-4 h-4 mr-2 text-amber-600" />
          {activity.time}
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-2 text-amber-600" />
          {activity.location}
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <span className="w-4 h-4 mr-2 text-amber-600">👥</span>
          {activity.participants}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

// Composant pour les cartes d'artistes
const ArtistCard = ({ artist }: { artist: typeof artists[0] }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="group"
  >
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border-2 hover:border-amber-200">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={artist.image}
          alt={artist.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <Badge className="absolute top-4 right-4 bg-amber-600 hover:bg-amber-700">
          {artist.genre}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors">
          {artist.name}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {artist.description}
        </CardDescription>
      </CardHeader>
    </Card>
  </motion.div>
);

// Composant pour les cartes de stands
const StandCard = ({ stand }: { stand: typeof stands[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="group"
  >
    <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-200 bg-white">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <ShoppingBag className="w-8 h-8 text-amber-600" />
          <Badge className="bg-green-100 text-green-800 text-lg font-bold">
            {stand.price}$
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors">
          {stand.name}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {stand.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {stand.features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
              {feature}
            </li>
          ))}
        </ul>
        <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
          Réserver ce stand
        </Button>
      </CardContent>
    </Card>
  </motion.div>
);

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Section Accueil - Seulement le logo */}
      <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
        {/* Seul le logo est visible */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center"
        >
          <Image
            src="/logo/sepela_black.svg"
            alt="Festival Sepela Logo"
            width={600}
            height={600}
            className="mx-auto"
            priority
          />
        </motion.div>
      </section>

      {/* Navigation flottante qui apparaît au scroll */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm py-4"
      >
        <ul className="flex flex-wrap justify-center gap-6 text-gray-800 font-medium">
          <li className="hover:text-amber-600 cursor-pointer transition-colors">Accueil</li>
          <li className="hover:text-amber-600 cursor-pointer transition-colors">À propos</li>
          <li className="hover:text-amber-600 cursor-pointer transition-colors">Programme & Activités</li>
          <li className="hover:text-amber-600 cursor-pointer transition-colors">Artistes</li>
          <li className="hover:text-amber-600 cursor-pointer transition-colors">Stands</li>
          <li className="hover:text-amber-600 cursor-pointer transition-colors">Produits</li>
        </ul>
      </motion.nav>

      {/* Section d'introduction qui apparaît au scroll */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Festival <span className="text-amber-600">Sepela</span> 2024
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Découvrez l&apos;univers vibrant du Festival Sepela, où la culture, l&apos;art et la communauté se rencontrent dans une célébration inoubliable.
            </p>
            
            {/* Informations sur les dates */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg text-gray-700 mb-8">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-amber-600" />
                <span>30-31 Août 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-amber-600" />
                <span>9h-18h (Jour 1) • 14h-18h (Jour 2)</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Inscris-toi maintenant
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Section À propos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              À Propos du Festival
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
            <div className="max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-semibold text-amber-600 mb-4">
                Une Célébration de Foi et de Communauté
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Le Festival Sepela est bien plus qu&apos;un simple événement - c&apos;est une célébration de notre communauté, 
                de notre culture et de l&apos;esprit créatif qui nous unit. Organisé par la jeunesse dynamique de l&apos;église 
                missionnaire Temps de la Moisson, ce festival de deux jours promet d&apos;être une expérience transformatrice pour tous les participants.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Notre mission est de créer un espace où l&apos;art, la musique, les jeux et la spiritualité convergent pour inspirer, connecter et élever notre communauté. 
                Rejoignez-nous pour cette aventure extraordinaire où chaque moment sera l&apos;occasion de créer des souvenirs durables et de renforcer les liens qui nous unissent.
              </p>
            </div>
          </motion.div>

          {/* Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "2", label: "Jours de Festival" },
              { number: "10+", label: "Activités" },
              { number: "500+", label: "Participants Attendus" },
              { number: "20+", label: "Stands & Exposants" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-amber-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Programme & Activités */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Programme & Activités
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Plongez dans l&apos;univers du gaming avec nos tournois de jeux vidéo passionnants, 
              laissez-vous emporter par des performances musicales d&apos;artistes talentueux
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </div>
      </section>

      {/* Section Artistes */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Nos Artistes
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Découvrez les talents exceptionnels qui animeront le festival
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </div>
      </section>

      {/* Section Stands */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Réservez Votre Stand
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Participez au festival en tant qu&apos;exposant et partagez vos produits avec notre communauté
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stands.map((stand) => (
              <StandCard key={stand.id} stand={stand} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-amber-50 p-8 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Informations Importantes
              </h3>
              <p className="text-gray-600 mb-6">
                Tous les stands sont proposés au prix unique de 70$. 
                Réservation obligatoire avant le 25 août 2024.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                  Réserver un Stand
                </Button>
                <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                  <Phone className="w-4 h-4 mr-2" />
                  0977206687
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Produits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Produits & Souvenirs
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Découvrez l&apos;artisanat local et les créations uniques de notre région
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Artisanat Local",
                description: "Créations uniques de nos artisans locaux",
                icon: "🎨",
                price: "À partir de 15$"
              },
              {
                title: "Produits Culinaires",
                description: "Spécialités et délices de notre région",
                icon: "🍯",
                price: "À partir de 10$"
              },
              {
                title: "Merchandising Festival",
                description: "T-shirts, casquettes et souvenirs officiels",
                icon: "👕",
                price: "À partir de 20$"
              },
              {
                title: "Créations Artistiques",
                description: "Œuvres d&apos;art et créations originales",
                icon: "🖼️",
                price: "À partir de 25$"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-200 bg-white">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <CardTitle className="text-xl font-bold text-gray-800">
                      {product.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge className="bg-green-100 text-green-800 text-lg">
                      {product.price}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Informations de contact */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-amber-400">
                Contactez-nous pour plus d&apos;informations
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-amber-400" />
                  <span>0977206687</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-amber-400" />
                  <span>contact@festivalsepela.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-amber-400" />
                  <span>Église Temps de la Moisson</span>
                </div>
              </div>
            </div>

            {/* Navigation rapide */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-amber-400">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#accueil" className="hover:text-amber-400 transition-colors">Accueil</a></li>
                <li><a href="#apropos" className="hover:text-amber-400 transition-colors">À propos</a></li>
                <li><a href="#programme" className="hover:text-amber-400 transition-colors">Programme</a></li>
                <li><a href="#artistes" className="hover:text-amber-400 transition-colors">Artistes</a></li>
                <li><a href="#stands" className="hover:text-amber-400 transition-colors">Stands</a></li>
                <li><a href="#produits" className="hover:text-amber-400 transition-colors">Produits</a></li>
              </ul>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-amber-400">Suivez-nous</h3>
              <div className="flex space-x-4">
                <Button size="icon" variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900">
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
              <p className="mt-4 text-gray-400">
                Restez connectés pour toutes les actualités du festival !
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Festival Sepela. Organisé par la jeunesse de l&apos;Église Missionnaire Temps de la Moisson. 
              Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
