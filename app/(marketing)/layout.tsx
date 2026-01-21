import "/public/assets/css/bootstrap.min.css";
import "/public/assets/css/fontawesome.css";
import "/public/assets/css/magnific-popup.css";
import "/public/assets/css/nice-select.css";
import "/public/assets/css/slick-slider.css";
import "/public/assets/css/aos.css";
import "/public/assets/css/mobile-menu.css";
import "/public/assets/css/main.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Brobyggere",
    template: "%s | Brobyggere",
  },
  description:
    "Brobyggere bemannings- og rekrutteringstjeneste. Vi leverer fleksible bemanningsløsninger og kvalifiserte vikarer når behovet oppstår.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className="body">{children}</body>
    </html>
  );
}
