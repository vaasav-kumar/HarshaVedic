import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Building2, MapPin } from "lucide-react";
import ClinicTreatmentRoom from "../../assets/clinic-treatment-room.jpg";
import ClinicExterior from "../../assets/clinic-exterior.jpg";
import ClinicSteamTherapy from "../../assets/clinic-steam-therapy.jpg";

const photos = [
  {
    src: ClinicTreatmentRoom,
    alt: "Panchakarma treatment room with Shirodhara setup at Harsha Vedic Medavakkam",
    label: "Panchakarma & Shirodhara",
  },
  {
    src: ClinicExterior,
    alt: "Harsha Vedic Ayurveda Clinic & Wellness Center exterior in Medavakkam, Chennai",
    label: "Our Clinic Exterior",
  },
  {
    src: ClinicSteamTherapy,
    alt: "Herbal steam therapy cabinet at Harsha Vedic Ayurveda clinic",
    label: "Herbal Steam Therapy",
  },
];

export function ClinicFacilities() {
  return (
    <section
      id="clinic"
      className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, #16a34a 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm mb-4 shadow-md">
            <Building2 size={16} className="text-green-600" />
            <span className="font-semibold">Our Clinic</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visit Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">
              Wellness Centre
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            A calm, fully equipped Ayurvedic space on Velachery Main Road,
            Medavakkam — from dedicated Panchakarma and Shirodhara rooms to
            herbal steam therapy, designed for authentic care by Dr. Harsita
            Devi J.K.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-10 md:mb-12 space-y-4 text-gray-600 text-base leading-relaxed px-2">
          <p>
            Our treatment rooms are prepared for classical Kerala therapies:
            warm herbal oil applications, Shirodhara for nervous-system calm,
            and supervised Panchakarma protocols tailored to your Prakriti.
            The herbal steam cabinet supports Swedana after oleation, helping
            open channels and prepare the body for deeper cleansing when
            indicated.
          </p>
          <p>
            Patients from Tambaram, Pallikaranai, Velachery, Perumbakkam, and
            across South Chennai visit for in-person consultations and therapy
            courses. The clinic is easy to reach by road, with a quiet setting
            suited to rest between sessions. Hygiene, fresh linen, and
            physician-supervised procedures are standard for every visit.
          </p>
          <p>
            Whether you are beginning a multi-day detox, seeking relief from
            joint or cervical pain, or continuing follow-up care after an online
            consultation, the Medavakkam wellness centre is set up for
            comfortable, authentic Ayurvedic treatment from assessment through
            aftercare guidance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {photos.map((photo) => (
            <figure
              key={photo.label}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent px-4 pt-12 pb-4">
                <span className="text-white font-semibold text-sm sm:text-base">
                  {photo.label}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 md:mt-10 flex items-center justify-center gap-2 text-sm sm:text-base text-gray-600 text-center">
          <MapPin size={18} className="text-green-700 shrink-0" />
          <span>
            Harsha Vedic Ayurveda Clinic &amp; Wellness Center, Plot no 4, shop
            no 7, 1st floor, Velachery Main Road, Medavakkam, Chennai – 600100
          </span>
        </p>
      </div>
    </section>
  );
}
