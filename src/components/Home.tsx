              <button
                onClick={() => scrollGardens(1)}
                aria-label="Scroll gardens right"
                className="rounded-full border border-neutral-300 p-2 text-brand-green transition-colors hover:bg-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div
            ref={scrollContainerRef}
            className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4"
          >
            {TOP_GARDENS.slice(0, 6).map((garden: Garden) => (
              <article
                key={garden.id}
                className="min-w-[82%] snap-start rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:min-w-[44%] lg:min-w-[31%]"
              >
                <span className="text-3xl" aria-hidden="true">
                  {garden.emoji}
                </span>
                <h3 className="mt-4 font-serif text-xl font-bold text-brand-green">
                  {garden.name}
                </h3>
                <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-[#B8860B]">
                  <MapPin className="h-3.5 w-3.5" />
                  {garden.location}
                </p>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-neutral-600">
                  {garden.description}
                </p>
                <button
                  onClick={() => onNavigate("gardens")}
                  className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-brand-green hover:text-[#B8860B]"
                >
                  Explore gardens <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </article>
            ))}
          </div>
          <button
            onClick={() => onNavigate("gardens")}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-brown"
          >
            View all gardens <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B8860B]">
            What we do
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-green">
            Tea trade, handled with care
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 3).map((service: ServiceItem) => (
            <article
              key={service.id}
              className="rounded-2xl border border-neutral-200 p-6 transition-shadow hover:shadow-lg"
            >
              <span className="text-2xl" aria-hidden="true">
                {service.icon}
              </span>
              <h3 className="mt-4 font-serif text-lg font-bold text-brand-green">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate("services")}
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-green hover:text-[#B8860B]"
          >
            See all services <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <section className="bg-brand-green px-6 py-16 text-center text-white">
        <Mail className="mx-auto h-7 w-7 text-[#D4AF37]" />
        <h2 className="mt-4 font-serif text-2xl font-bold sm:text-3xl">
          Let&apos;s find the right tea for your business
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/75">
          Talk with our team about sourcing, samples, or your next tea
          requirement.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            onClick={() => onNavigate("contact")}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-bold text-black hover:bg-[#e2c45c]"
          >
            <Phone className="h-4 w-4" /> Contact our team
          </button>
          <button
            onClick={() => onNavigate("sample-request")}
            className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Request a sample
          </button>
        </div>
      </section>
    </div>
  );
}
