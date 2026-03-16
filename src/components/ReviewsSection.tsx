import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

const REVIEWS = [
  {
    author: "Antonios Daskalakis",
    rating: 5,
    date: "1 μήνα πριν",
    text: "Οι καλύτεροι σε όλη την Κρήτη. Επαγγελματίες σε όλα τους, άριστη εξυπηρέτηση, λογικές τιμές.",
  },
  {
    author: "G P",
    rating: 5,
    date: "6 μήνες πριν",
    text: "Τέλεια εξυπηρέτηση, εξειδίκευση και πολύ καλές τιμές. Δεν υπήρχε ανταλλακτικό γνήσιο αλλά βρήκαμε λύση και έγινε ότι είναι δυνατόν ώστε να επισκευαστεί η κλειδαριά του αυτοκινήτου. Να πάτε χωρίς δεύτερη σκέψη!",
  },
  {
    author: "Marietta Gram",
    rating: 5,
    date: "1 χρόνο πριν",
    text: "Είχα χάσει το κλειδί του αυτοκινήτου. Επικοινώνησα με τον κλειδαρά στο κινητό και με εξυπηρέτησε κατευθείαν. Πολύ βοηθητικός, θετικός και εξαιρετικές τιμές.",
  },
  {
    author: "Katerina Papastefanaki",
    rating: 5,
    date: "2 χρόνια πριν",
    text: "Μου πήρε 20 ευρώ για να αφαιρέσει σπασμένο κλειδί από κλειδαριά ασφαλείας ενώ άλλος συνάδελφός του μου ζητούσε 70!",
  },
  {
    author: "manos toumpakakis",
    rating: 5,
    date: "3 χρόνια πριν",
    text: "Ο καλύτερος κλειδαράς της πόλης, γρήγορος, άψογος, εξυπηρετικός, και με τις καλύτερες τιμές! Το κλειδί λειτουργεί άψογα!",
  },
  {
    author: "Carsten Singh",
    rating: 5,
    date: "3 χρόνια πριν",
    text: "Nice family-run business with a wide range of locksmith products and decent prices including installation fees for your locksmith needs.",
  },
  {
    author: "Δημήτρης Σαββάκης",
    rating: 5,
    date: "6 μήνες πριν",
    text: "Το απόλυτο μαγαζί για οτιδήποτε σχετικό με το αντικείμενο αυτό! Ευγενικά, πρόσχαρα και πάντα εξυπηρετικά παιδιά, με μεγάλη τεχνογνωσία στην ειδικότητά τους.",
  },
  {
    author: "Στέφανος Τσαβαχίδης",
    rating: 5,
    date: "1 χρόνο πριν",
    text: "Άνθρωποι με μεράκι για την δουλειά τους, εξυπηρετικοί και πλήρως καταρτισμένοι για κάθε σου πρόβλημα πάνω στο κλειδί!",
  },
  {
    author: "pan gia",
    rating: 5,
    date: "1 χρόνο πριν",
    text: "Ευχαριστώ θερμά για την άμεση βοήθεια στο κλείδωμα του scooter μου. Ένας Αθηναίος που τον \"σώσατε\".",
  },
];

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ))}
  </div>
);

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const ReviewsSection = () => (
  <section className="py-24 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-600 px-5 py-2.5 rounded-full text-sm font-bold mb-6 border border-yellow-400/30">
          <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
          Αξιολογήσεις Google
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Τι Λένε οι{" "}
          <span className="text-gradient-red">Πελάτες μας</span>
        </h2>
        <div className="flex items-center justify-center gap-3 mt-4">
          <span className="text-5xl font-extrabold text-foreground">4.8</span>
          <div className="flex flex-col items-start gap-1">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">Βασισμένο σε αξιολογήσεις Google</span>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {REVIEWS.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className={`bg-card border border-border/60 rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/30 hover:shadow-lg transition-all duration-300${i >= 3 ? " hidden md:flex" : ""}`}
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 text-white font-bold text-sm">
                {getInitials(review.author)}
              </div>
              <div className="min-w-0">
                <p className="font-bold text-sm truncate">{review.author}</p>
                <p className="text-xs text-muted-foreground">{review.date}</p>
              </div>
            </div>
            <Stars rating={review.rating} />
            <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <a
          href="https://www.google.com/maps/search/?api=1&query=Παντελής+Λυτίνας+Κλειδαράς+Ηράκλειο"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border-2 border-primary/40 text-primary px-6 py-3 rounded-xl font-bold text-sm hover:bg-primary/5 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Δείτε όλες τις αξιολογήσεις στο Google
        </a>
      </div>
    </div>
  </section>
);

export default ReviewsSection;

