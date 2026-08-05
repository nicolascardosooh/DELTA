"use client";

import { motion } from "framer-motion";
import { BiBookOpen, BiLineChart } from "react-icons/bi";
import { GiScales } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
import {
  BsChatSquareDotsFill,
  BsFileEarmarkSpreadsheetFill,
  BsPersonVcard,
  BsBuildingsFill,
} from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { site } from "@/lib/site";
import type { IconType } from "react-icons";

const icons: IconType[] = [
  BiBookOpen,
  GiScales,
  RiCustomerService2Fill,
  BsChatSquareDotsFill,
  BsFileEarmarkSpreadsheetFill,
  BsPersonVcard,
  MdAttachMoney,
  BsBuildingsFill,
  BiLineChart,
];

export default function SolutionsSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <h2 className="mb-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            O que podemos fazer por sua empresa?
          </h2>
          <p className="text-lg text-slate-600">
            Soluções completas para o seu negócio ir além — com acompanhamento próximo e
            linguagem clara.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((service, index) => {
            const Icon = icons[index] ?? BiLineChart;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
                className="border border-slate-200 bg-white p-6 transition hover:border-azul-delta/40"
              >
                <Icon className="mb-4 h-7 w-7 text-azul-delta" />
                <h3 className="mb-2 text-base font-semibold text-slate-900">{service.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
