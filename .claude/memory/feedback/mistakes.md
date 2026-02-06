# Mistakes Log - Errores a NO Repetir

**Purpose:** Documentar errores cometidos para NO repetirlos. Aprendemos más de los errores que de los éxitos.

**Format:**
```markdown
## Mistake #X - YYYY-MM-DD

**What Happened**: [Descripción del error]
**Why It Happened**: [Root cause]
**Impact**: [Consecuencias]
**Prevention**: [Cómo evitarlo en el futuro]
**Status**: [Fixed / Documented / Monitoring]
```

---

## Mistake #0 - 2026-02-05 (Ejemplo - Template)

**What Happened**: Este es un archivo template, no un error real.

**Why It Happened**: Sistema recién creado, no hay errores documentados aún.

**Impact**: N/A

**Prevention**: Cuando ocurra el primer error, documentarlo aquí siguiendo este formato.

**Status**: Template

---

## Instrucciones para Agentes

**Cuando documentar un mistake:**
1. Algo salió mal (bug, error, mala decisión, resultado inesperado)
2. El impacto fue significativo (tiempo perdido, calidad comprometida, oportunidad perdida)
3. Es prevenible en el futuro con mejor proceso

**Cuando NO documentar:**
1. Experimentos que no funcionaron pero aprendimos (eso va a learnings.md)
2. Errores menores sin impacto (<5 minutos perdidos)
3. Problemas fuera de nuestro control (API caída, servicio externo fallando)

**Tipos comunes de mistakes a documentar:**
- **Code bugs**: Errores en implementación que llegaron a producción
- **Process failures**: Saltamos un paso crítico (QA, testing, review)
- **Coordination issues**: Dos agentes hicieron trabajo duplicado o conflictivo
- **Bad decisions**: Priorizamos algo incorrecto con información disponible
- **Technical debt**: Tomamos atajo que nos costó más después

---

## Ejemplo de Buen Mistake Documentation

```markdown
## Mistake #1 - 2026-02-10

**What Happened**: Desplegamos 20 role pages sin sitemap actualizado. Google no las indexó por 3 días.

**Why It Happened**: Olvidamos actualizar sitemap.xml después de agregar páginas nuevas.

**Impact**:
- 3 días de retraso en indexación
- Lost opportunity: ~50-100 impresiones potenciales
- Time wasted: 2 horas investigando por qué no indexaban

**Prevention**:
1. Agregar check en QA Engineer: "¿Sitemap actualizado?"
2. Automatizar: Sitemap se regenera en cada deploy
3. Verificar en GSC después de cada batch de páginas nuevas

**Status**: Fixed - Sitemap ahora se auto-regenera en build
```

---

## Stats (Actualizar mensualmente)

**Total Mistakes Documented:** 0
**Mistakes Prevented (by documentation):** 0
**Avg Time to Fix:** N/A
**Most Common Category:** N/A

---

**Remember:** "Those who cannot remember the past are condemned to repeat it." - George Santayana
