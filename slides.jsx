// FLAMAX deck — 8 slides
// All slides are direct children <section> of <deck-stage>.

const TOTAL = 8;

// =========================================================================
// 01 — TITLE
// =========================================================================
function Slide01() {
  return (
    <SlideFrame bg={COLORS.ink} color={COLORS.white} style={{ padding: 0 }}>
      {/* left: identity */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'grid', gridTemplateColumns: '1.15fr 1fr',
      }}>
        <div style={{
          padding: `${SPACING.paddingTop}px ${SPACING.paddingX}px ${SPACING.paddingBottom}px`,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          borderRight: `1px solid ${COLORS.ruleLight}`,
        }}>
          <div style={{
            fontFamily: '"JetBrains Mono", ui-monospace, monospace',
            fontSize: TYPE_SCALE.micro, letterSpacing: '0.18em',
            textTransform: 'uppercase', opacity: 0.55,
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', gap: 24, whiteSpace: 'nowrap',
          }}>
            <FlamaxMark color={COLORS.white} />
            <span>2026</span>
          </div>

          <div>
            <Eyebrow color={COLORS.red}>Для проектировщиков и дизайн-бюро</Eyebrow>
            <BigTitle color={COLORS.white} size={TYPE_SCALE.display} style={{ marginBottom: 36 }}>
              Сборные стальные<br/>
              резервуары и насосные<br/>
              станции <span style={{ color: COLORS.red }}>пожаротушения</span>
            </BigTitle>
            <div style={{
              fontSize: TYPE_SCALE.subtitle,
              lineHeight: 1.18, fontWeight: 300,
              color: 'rgba(255,255,255,0.72)',
              maxWidth: 820,
              textWrap: 'balance',
            }}>
              Проектирование, производство и монтаж под ключ.<br/>
              От 50 до 5 000 м³.
            </div>
          </div>

          <div style={{
            display: 'flex', justifyContent: 'space-between',
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: TYPE_SCALE.micro,
            opacity: 0.55, letterSpacing: '0.08em', textTransform: 'uppercase',
            whiteSpace: 'nowrap', gap: 24,
          }}>
            <span>FLAMAX.RU</span>
            <span>+7&nbsp;800&nbsp;200&nbsp;62&nbsp;70</span>
          </div>
        </div>

        {/* right: tank diagram on red field */}
        <div style={{
          background: COLORS.red, position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.06) 0 1px, transparent 1px 80px), repeating-linear-gradient(90deg, rgba(0,0,0,0.06) 0 1px, transparent 1px 80px)',
          }} />
          <div style={{ transform: 'scale(1.25)' }}>
            <TankDiagram color={COLORS.white} accent={COLORS.ink} width={520} />
          </div>
          <div style={{
            position: 'absolute', bottom: SPACING.paddingBottom, left: 60,
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: TYPE_SCALE.micro, color: 'rgba(255,255,255,0.85)',
            letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>
            РВС — резервуар вертикальный стальной
          </div>
          <div style={{
            position: 'absolute', top: SPACING.paddingTop, right: 60,
            fontFamily: '"Inter Tight", sans-serif',
            fontSize: TYPE_SCALE.hero, fontWeight: 800,
            color: 'rgba(255,255,255,0.14)',
            letterSpacing: '-0.04em', lineHeight: 0.9,
          }}>
            01
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

// =========================================================================
// 02 — КОМПАНИЯ В ЦИФРАХ
// =========================================================================
function Slide02() {
  const stats = [
    { num: '2008', label: 'на рынке', sub: 'Год основания компании' },
    { num: '350+', label: 'проектов', sub: 'резервуаров и насосных станций' },
    { num: '700+', label: 'резервуаров', sub: 'установлено по всей России' },
    { num: '−55°C', label: 'эксплуатация', sub: 'от Калининграда до Владивостока' },
  ];
  return (
    <SlideFrame>
      <HeaderBar section="О компании" number={2} total={TOTAL} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: SPACING.titleGap, flex: 1 }}>
        <BigTitle>Компания в цифрах</BigTitle>
        <div style={{
          fontSize: TYPE_SCALE.subtitle,
          lineHeight: 1.2, fontWeight: 300,
          color: COLORS.graphite,
          maxWidth: 1300, textWrap: 'balance',
        }}>
          Полный цикл: проектирование, собственное производство в&nbsp;Татарстане, монтаж и сервис.
        </div>

        <div style={{
          marginTop: 'auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
          borderTop: `2px solid ${COLORS.ink}`,
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: '40px 32px 0 0',
              borderRight: i < 3 ? `1px solid ${COLORS.rule}` : 'none',
              paddingLeft: i === 0 ? 0 : 32,
              display: 'flex', flexDirection: 'column', gap: 18,
            }}>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: TYPE_SCALE.micro, color: COLORS.red,
                letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>
                0{i+1}
              </div>
              <div style={{
                fontFamily: '"Inter Tight", sans-serif', fontWeight: 700,
                fontSize: TYPE_SCALE.display, lineHeight: 1, letterSpacing: '-0.03em',
                color: COLORS.ink,
              }}>
                {s.num}
              </div>
              <div style={{
                fontSize: TYPE_SCALE.body, fontWeight: 600, color: COLORS.ink,
              }}>
                {s.label}
              </div>
              <div style={{
                fontSize: TYPE_SCALE.small, lineHeight: 1.3, color: COLORS.mute, fontWeight: 400,
              }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}

// =========================================================================
// 03 — ЧТО МЫ ПРОИЗВОДИМ
// =========================================================================
function Slide03() {
  return (
    <SlideFrame>
      <HeaderBar section="Продукт" number={3} total={TOTAL} />
      <BigTitle style={{ marginBottom: SPACING.titleGap }}>Что мы производим</BigTitle>

      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, flex: 1,
      }}>
        {/* card 1 */}
        <div style={{
          background: COLORS.white,
          border: `1px solid ${COLORS.rule}`,
          padding: 48,
          display: 'flex', flexDirection: 'column', gap: 24,
          position: 'relative',
        }}>
          <AccentStripe orient="vertical" thickness={8} />
          <Eyebrow>01 / Резервуары</Eyebrow>
          <div style={{
            fontFamily: '"Inter Tight", sans-serif', fontWeight: 700,
            fontSize: 56, letterSpacing: '-0.02em', lineHeight: 1.05,
          }}>
            Сборные стальные<br/>резервуары РВС
          </div>
          <div style={{ fontSize: TYPE_SCALE.small, color: COLORS.graphite, lineHeight: 1.35, fontWeight: 300 }}>
            Корпус из оцинкованной стали, армированная ПВХ-мембрана, теплоизоляция, опция подогрева.
          </div>
          <div style={{ marginTop: 'auto' }}>
            <SpecRow label="Объём" value="50 — 5 000 м³" />
            <SpecRow label="Назначение" value="пожарный / питьевой" />
            <SpecRow label="Монтаж" value="1 000 м³ за 5–7 дней" />
          </div>
        </div>

        {/* card 2 */}
        <div style={{
          background: COLORS.ink, color: COLORS.white,
          padding: 48,
          display: 'flex', flexDirection: 'column', gap: 24,
          position: 'relative',
        }}>
          <AccentStripe orient="vertical" thickness={8} />
          <Eyebrow color={COLORS.red}>02 / Насосные станции</Eyebrow>
          <div style={{
            fontFamily: '"Inter Tight", sans-serif', fontWeight: 700,
            fontSize: 56, letterSpacing: '-0.02em', lineHeight: 1.05,
          }}>
            Блочно-модульные<br/>насосные станции
          </div>
          <div style={{ fontSize: TYPE_SCALE.small, color: 'rgba(255,255,255,0.78)', lineHeight: 1.35, fontWeight: 300 }}>
            Готовый блок-контейнер. Пожаротушение, водоснабжение, повышение давления.
          </div>
          <div style={{ marginTop: 'auto' }}>
            <SpecRow label="Тип" value="пожарные / хоз-питьевые" color={COLORS.white} />
            <SpecRow label="Подъём" value="до 4 ступеней" color={COLORS.white} />
            <SpecRow label="Аналоги" value="Grundfos / Wilo / KSB" color={COLORS.white} />
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

// =========================================================================
// 04 — КОНСТРУКЦИЯ РЕЗЕРВУАРА
// =========================================================================
function Slide04() {
  const parts = [
    { id: '01', title: 'Корпус', text: 'Оцинкованные листы, болтовые соединения. Расчёт под ветровые / снеговые / сейсмические нагрузки.' },
    { id: '02', title: 'ПВХ-мембрана', text: 'Армированная, цельная, под индивидуальный размер. Полная герметичность.' },
    { id: '03', title: 'Теплоизоляция', text: 'Экструдированный пенополистирол по стенкам и дну. Сэндвич PUR/PIR на крыше.' },
    { id: '04', title: 'Подогрев', text: 'Автоматический ТЭН по температуре воды. Эксплуатация до −55°C.' },
    { id: '05', title: 'Монтаж', text: 'Гидродомкраты, бригада 4–5 чел. 1 000 м³ за 5–7 дней.' },
  ];
  return (
    <SlideFrame>
      <HeaderBar section="Технология" number={4} total={TOTAL} />
      <BigTitle style={{ marginBottom: SPACING.titleGap }}>
        Конструкция <span style={{ color: COLORS.red }}>резервуара</span>
      </BigTitle>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '460px 1fr',
        gap: 80, flex: 1, alignItems: 'flex-start',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 12 }}>
          <TankDiagram color={COLORS.ink} accent={COLORS.red} width={460} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {parts.map((p, i) => (
            <div key={p.id} style={{
              display: 'grid',
              gridTemplateColumns: '90px 1fr',
              gap: 32,
              padding: '14px 0',
              borderTop: i === 0 ? `2px solid ${COLORS.ink}` : `1px solid ${COLORS.rule}`,
              borderBottom: i === parts.length - 1 ? `1px solid ${COLORS.rule}` : 'none',
              alignItems: 'baseline',
            }}>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: TYPE_SCALE.small, color: COLORS.red, fontWeight: 600,
              }}>
                {p.id}
              </div>
              <div>
                <div style={{
                  fontFamily: '"Inter Tight", sans-serif', fontWeight: 600,
                  fontSize: TYPE_SCALE.body, marginBottom: 6,
                }}>
                  {p.title}
                </div>
                <div style={{
                  fontSize: TYPE_SCALE.small, color: COLORS.graphite,
                  lineHeight: 1.35, fontWeight: 300, maxWidth: 720,
                }}>
                  {p.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}

// =========================================================================
// 05 — ПОЖАРНАЯ СЕРТИФИКАЦИЯ (KEY SLIDE)
// =========================================================================
function Slide05() {
  const certs = [
    { code: 'СП 8.13130', title: 'Наружное противопожарное водоснабжение', tag: 'Соответствие 2020' },
    { code: 'ТР ЕАЭС 043', title: 'О требованиях к средствам обеспечения пожарной безопасности', tag: 'Декларация' },
    { code: 'ГОСТ 31385', title: 'Резервуары вертикальные цилиндрические стальные для нефти и нефтепродуктов', tag: 'Производство' },
    { code: 'FM Approved', title: 'Международная сертификация противопожарного оборудования', tag: 'Опция' },
    { code: 'ISO 9001', title: 'Система менеджмента качества', tag: 'Завод' },
    { code: 'СРО', title: 'Допуск к проектированию и монтажу систем пожаротушения', tag: 'Допуск' },
  ];
  return (
    <SlideFrame bg={COLORS.ink} color={COLORS.white}>
      <HeaderBar section="Пожарная безопасность" number={5} total={TOTAL} color={COLORS.white} />

      <div style={{
        display: 'grid', gridTemplateColumns: '1.1fr 1.6fr',
        gap: 80, flex: 1, alignItems: 'flex-start',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          <Eyebrow color={COLORS.red}>Ключевое для проектировщика</Eyebrow>
          <BigTitle color={COLORS.white} size={TYPE_SCALE.title}>
            Полный комплект документов на&nbsp;<span style={{ color: COLORS.red }}>пожарные</span> резервуары и&nbsp;станции
          </BigTitle>
          <div style={{
            fontSize: TYPE_SCALE.small, color: 'rgba(255,255,255,0.72)',
            lineHeight: 1.4, fontWeight: 300, maxWidth: 540,
          }}>
            Решения проходят экспертизу. Передаём проектировщику комплект сертификатов, расчёты и шаблоны для разделов АР / ОВ / ВК / АПТ.
          </div>

          <div style={{
            marginTop: 24,
            display: 'flex', alignItems: 'center', gap: 24,
            padding: '24px 28px',
            border: `1px solid ${COLORS.red}`,
            background: 'rgba(227,6,19,0.08)',
          }}>
            <div style={{
              fontFamily: '"Inter Tight", sans-serif', fontWeight: 800,
              fontSize: 80, color: COLORS.red, lineHeight: 0.9, letterSpacing: '-0.03em',
            }}>79</div>
            <div style={{ fontSize: TYPE_SCALE.small, lineHeight: 1.3, fontWeight: 400 }}>
              сданных проектов<br/>систем пожаротушения
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 0,
          borderTop: `1px solid ${COLORS.ruleLight}`,
          borderLeft: `1px solid ${COLORS.ruleLight}`,
        }}>
          {certs.map((c, i) => (
            <div key={i} style={{
              padding: '28px 32px',
              borderRight: `1px solid ${COLORS.ruleLight}`,
              borderBottom: `1px solid ${COLORS.ruleLight}`,
              display: 'flex', flexDirection: 'column', gap: 12,
              minHeight: 200,
            }}>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 24, color: COLORS.red,
                letterSpacing: '0.12em', textTransform: 'uppercase',
              }}>
                {c.tag}
              </div>
              <div style={{
                fontFamily: '"Inter Tight", sans-serif', fontWeight: 700,
                fontSize: TYPE_SCALE.subtitle, color: COLORS.white, letterSpacing: '-0.02em',
                lineHeight: 1,
              }}>
                {c.code}
              </div>
              <div style={{
                fontSize: 24, lineHeight: 1.3, color: 'rgba(255,255,255,0.65)',
                fontWeight: 300,
              }}>
                {c.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}

// =========================================================================
// 06 — ПОМОЩЬ ПРОЕКТИРОВЩИКУ
// =========================================================================
function Slide06() {
  const steps = [
    { id: '01', title: 'Опросный лист', text: 'Заполняете 1 страницу. Объём, назначение, площадка, сроки.' },
    { id: '02', title: 'Расчёт за 1 день', text: 'Технические параметры, спецификация, ТКП на стол проектировщика.' },
    { id: '03', title: '3D-модель и чертежи', text: 'BIM-модель, IFC, dwg-чертежи, узлы для разделов АР / КЖ / ОВ.' },
    { id: '04', title: 'Шеф-монтаж', text: 'Сопровождение на стройплощадке, авторский надзор.' },
  ];
  return (
    <SlideFrame>
      <HeaderBar section="Сервис" number={6} total={TOTAL} />
      <BigTitle style={{ marginBottom: 24 }}>Помощь проектировщику</BigTitle>
      <div style={{
        fontSize: TYPE_SCALE.subtitle, lineHeight: 1.2, fontWeight: 300,
        color: COLORS.graphite, maxWidth: 1100, marginBottom: SPACING.titleGap,
        textWrap: 'balance',
      }}>
        От опросного листа до шеф-монтажа — единая точка ответственности.
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 0, flex: 1,
        borderTop: `2px solid ${COLORS.ink}`,
      }}>
        {steps.map((s, i) => (
          <div key={s.id} style={{
            padding: '40px 28px 32px 28px',
            paddingLeft: i === 0 ? 0 : 28,
            paddingRight: i === 3 ? 0 : 28,
            borderRight: i < 3 ? `1px solid ${COLORS.rule}` : 'none',
            display: 'flex', flexDirection: 'column', gap: 20,
            position: 'relative',
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 12,
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: TYPE_SCALE.micro, color: COLORS.red,
              letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>
              <span>{s.id}</span>
              {i < 3 && <span style={{ flex: 1, height: 1, background: COLORS.red, opacity: 0.4 }} />}
              {i < 3 && <span>→</span>}
            </div>
            <div style={{
              fontFamily: '"Inter Tight", sans-serif', fontWeight: 700,
              fontSize: 44, letterSpacing: '-0.02em', lineHeight: 1.05,
            }}>
              {s.title}
            </div>
            <div style={{
              fontSize: TYPE_SCALE.small, lineHeight: 1.35, color: COLORS.graphite,
              fontWeight: 300, marginTop: 'auto',
            }}>
              {s.text}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 36,
        padding: '24px 28px',
        background: COLORS.ink, color: COLORS.white,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: TYPE_SCALE.small, letterSpacing: '0.04em',
      }}>
        <span style={{ opacity: 0.6, textTransform: 'uppercase' }}>// для проектных институтов и архитектурных бюро</span>
        <span style={{ color: COLORS.red, fontWeight: 600 }}>Технический каталог · опросный лист · BIM — высылаем сразу</span>
      </div>
    </SlideFrame>
  );
}

// =========================================================================
// 07 — ОБЪЕКТЫ
// =========================================================================
function Slide07() {
  const projects = [
    { client: 'ОАО «РЖД»', desc: 'Сортировочный парк', vol: '2 200 м³' },
    { client: 'PepsiCo', desc: 'Объединённое водоснабжение, FM Approved', vol: 'комплекс' },
    { client: 'FM Logistic', desc: 'Пожарные резервуары, Дмитров', vol: 'РВС' },
    { client: 'АРХБУМ', desc: 'Пожарные резервуары, 2 очередь', vol: '3 × 604 м³' },
    { client: 'KUHN', desc: 'Производственно-складской комплекс', vol: '1 800+ м³' },
    { client: 'ТЛЦ «Уральский»', desc: 'Резервуары + насосная станция', vol: '2 × 650 м³' },
  ];
  return (
    <SlideFrame>
      <HeaderBar section="Опыт" number={7} total={TOTAL} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: SPACING.titleGap }}>
        <BigTitle>Объекты по&nbsp;всей&nbsp;России</BigTitle>
        <div style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: TYPE_SCALE.small, color: COLORS.mute,
          letterSpacing: '0.06em', textTransform: 'uppercase',
        }}>
          От Калининграда до Владивостока
        </div>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: '1.05fr 1fr',
        gap: 56, flex: 1,
      }}>
        {/* photo column */}
        <div style={{
          position: 'relative',
          background: COLORS.ink,
          overflow: 'hidden',
        }}>
          <img
            src="assets/team-tanks.png"
            alt="Резервуары FLAMAX и монтажная бригада"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', display: 'block',
            }}
          />
          <div style={{
            position: 'absolute', left: 24, bottom: 24, right: 24,
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            color: COLORS.white,
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 22, letterSpacing: '0.06em', textTransform: 'uppercase',
            textShadow: '0 1px 12px rgba(0,0,0,0.6)',
          }}>
            <span>// Объект, зима</span>
            <span>2 × РВС + НС</span>
          </div>
        </div>

        {/* projects column */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 0,
          borderTop: `2px solid ${COLORS.ink}`,
          alignContent: 'start',
        }}>
          {projects.map((p, i) => (
            <div key={i} style={{
              padding: '22px 20px',
              paddingLeft: i % 2 === 0 ? 0 : 20,
              paddingRight: (i+1) % 2 === 0 ? 0 : 20,
              borderRight: (i+1) % 2 !== 0 ? `1px solid ${COLORS.rule}` : 'none',
              borderBottom: `1px solid ${COLORS.rule}`,
              display: 'flex', flexDirection: 'column', gap: 10,
              minHeight: 168,
            }}>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: TYPE_SCALE.micro, color: COLORS.red,
                letterSpacing: '0.1em',
              }}>
                0{i+1}
              </div>
              <div style={{
                fontFamily: '"Inter Tight", sans-serif', fontWeight: 700,
                fontSize: 28, lineHeight: 1.1, letterSpacing: '-0.02em',
              }}>
                {p.client}
              </div>
              <div style={{
                fontSize: 24, color: COLORS.graphite,
                lineHeight: 1.3, fontWeight: 300, flex: 1,
              }}>
                {p.desc}
              </div>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 24, fontWeight: 600,
                color: COLORS.ink,
              }}>
                {p.vol}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}

// =========================================================================
// 08 — КОНТАКТЫ
// =========================================================================
function Slide08() {
  return (
    <SlideFrame bg={COLORS.paper} color={COLORS.ink} style={{ padding: 0 }}>
      <div style={{
        position: 'absolute', inset: 0,
        display: 'grid', gridTemplateColumns: '1fr 1fr',
      }}>
        {/* left */}
        <div style={{
          padding: `${SPACING.paddingTop}px ${SPACING.paddingX}px ${SPACING.paddingBottom}px`,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: TYPE_SCALE.micro, letterSpacing: '0.18em',
            textTransform: 'uppercase', opacity: 0.55,
          }}>
            <FlamaxMark color={COLORS.ink} />
            <span>08 / 08</span>
          </div>

          <div>
            <Eyebrow color={COLORS.red}>Свяжитесь с нами</Eyebrow>
            <BigTitle size={TYPE_SCALE.display} style={{ marginBottom: 32 }}>
              Готовы посчитать<br/>ваш объект.
            </BigTitle>
            <div style={{
              fontSize: TYPE_SCALE.subtitle,
              lineHeight: 1.2, fontWeight: 300, color: COLORS.graphite,
              maxWidth: 700, textWrap: 'balance',
            }}>
              Пришлите опросный лист или ТЗ — расчёт за&nbsp;1 рабочий день.
            </div>
          </div>

          <div>
            <div style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: TYPE_SCALE.micro, color: COLORS.mute,
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12,
            }}>
              ООО ФЛАМАКС · ИНН 9715010966 · ОГРН 1147748025347
            </div>
          </div>
        </div>

        {/* right */}
        <div style={{
          background: COLORS.ink, color: COLORS.white,
          padding: `${SPACING.paddingTop}px 80px ${SPACING.paddingBottom}px`,
          display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 0,
          position: 'relative',
        }}>
          <AccentStripe orient="vertical" thickness={12} />

          <div style={{
            paddingBottom: 36,
            borderBottom: `1px solid ${COLORS.ruleLight}`,
            marginBottom: 36,
          }}>
            <div style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: TYPE_SCALE.micro,
              color: COLORS.red, letterSpacing: '0.18em', textTransform: 'uppercase',
              marginBottom: 14,
            }}>
              Бесплатный звонок
            </div>
            <div style={{
              fontFamily: '"Inter Tight", sans-serif', fontWeight: 700,
              fontSize: 88, letterSpacing: '-0.03em', lineHeight: 1,
              color: COLORS.white,
            }}>
              +7 800 200 62 70
            </div>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0,
            paddingBottom: 36, borderBottom: `1px solid ${COLORS.ruleLight}`,
            marginBottom: 36,
          }}>
            <div>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: TYPE_SCALE.micro,
                color: 'rgba(255,255,255,0.5)', letterSpacing: '0.18em', textTransform: 'uppercase',
                marginBottom: 12,
              }}>
                Москва
              </div>
              <div style={{
                fontFamily: '"Inter Tight", sans-serif', fontWeight: 600,
                fontSize: 40, letterSpacing: '-0.02em',
              }}>
                +7 495 649 62 69
              </div>
            </div>
            <div>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: TYPE_SCALE.micro,
                color: 'rgba(255,255,255,0.5)', letterSpacing: '0.18em', textTransform: 'uppercase',
                marginBottom: 12,
              }}>
                Почта
              </div>
              <div style={{
                fontFamily: '"Inter Tight", sans-serif', fontWeight: 600,
                fontSize: 40, letterSpacing: '-0.02em',
              }}>
                info@flamax.ru
              </div>
            </div>
          </div>

          <div>
            <div style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: TYPE_SCALE.micro,
              color: 'rgba(255,255,255,0.5)', letterSpacing: '0.18em', textTransform: 'uppercase',
              marginBottom: 12,
            }}>
              Сайт
            </div>
            <div style={{
              fontFamily: '"Inter Tight", sans-serif', fontWeight: 600,
              fontSize: 44, letterSpacing: '-0.02em', color: COLORS.white,
            }}>
              flamax.ru<span style={{ color: COLORS.red }}>.</span>
            </div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

// =========================================================================
// MOUNT
// =========================================================================
// =========================================================================
// MOUNT — single root with theme-controlled remount + Tweaks panel
// =========================================================================
const SLIDES = [Slide01, Slide02, Slide03, Slide04, Slide05, Slide06, Slide07, Slide08];

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "mood": "industrial",
  "density": "editorial",
  "accent": "block"
}/*EDITMODE-END*/;

function ThemedSlide({ Component }) {
  // Re-render on every theme change.
  return <Component />;
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply theme synchronously before slides render.
  applyTheme({ mood: t.mood, density: t.density, accent: t.accent });

  // Bump key on theme change → forces every slide subtree to remount.
  const themeKey = `${t.mood}-${t.density}-${t.accent}`;

  // Portal each slide into its <section data-screen-label="…"><div class="slide-mount">.
  const portals = SLIDES.map((Comp, i) => {
    const host = document.querySelector(`#slide-${i+1} .slide-mount`);
    if (!host) return null;
    return ReactDOM.createPortal(
      <ThemedSlide Component={Comp} />,
      host,
      `slide-${i+1}-${themeKey}`,
    );
  });

  return (
    <React.Fragment key={themeKey}>
      {portals}
      <TweaksPanel title="Tweaks">
        <TweakSection label="Mood" />
        <TweakRadio
          value={t.mood}
          options={[
            { value: 'industrial',  label: 'Industrial' },
            { value: 'engineering', label: 'Cool Eng.' },
            { value: 'heritage',    label: 'Heritage' },
          ]}
          onChange={(v) => setTweak('mood', v)}
        />
        <TweakSection label="Density" />
        <TweakRadio
          value={t.density}
          options={[
            { value: 'editorial', label: 'Editorial' },
            { value: 'brief',     label: 'Brief' },
            { value: 'billboard', label: 'Billboard' },
          ]}
          onChange={(v) => setTweak('density', v)}
        />
        <TweakSection label="Accent shape" />
        <TweakRadio
          value={t.accent}
          options={[
            { value: 'block',    label: 'Block' },
            { value: 'hairline', label: 'Hairline' },
            { value: 'cut',      label: 'Cut' },
          ]}
          onChange={(v) => setTweak('accent', v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

// Single root attached to a hidden host div outside <deck-stage>.
const appHost = document.createElement('div');
appHost.id = 'app-host';
document.body.appendChild(appHost);
ReactDOM.createRoot(appHost).render(<App />);
