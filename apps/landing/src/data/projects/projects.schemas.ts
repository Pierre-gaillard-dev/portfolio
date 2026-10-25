// Temporary interface before connecting to API
// TODO: replace with real zod schemas
import z from 'zod'

export const stackSchema = z.object({
  title: z.string(),
  slug: z.string(),
  color: z.string().regex(/#[A-Fa-f0-9]{6}/),
})

export const projectBlocKindSchema = z.enum([
  'text',
  'carousel',
  'demo',
  'video',
])

export const TxProjectBlocSchema = z.object({
  title: z.string(),
  content: z.string(),
  integration_url: z.url().optional(),
  position: z.string(),
  kind: projectBlocKindSchema,
})

export const txProjectSchema = z.object({
  title: z.string(),
  slug: z.string(),
  meta_title: z.string().nonempty(),
  meta_description: z.string().nonempty(),
  blocs: z.array(TxProjectBlocSchema),
})
export type TxProject = z.infer<typeof txProjectSchema>

export const projectSchema = z.object({
  cover_url: z.url(),
  github_url: z.url(),
  stacks: z.array(stackSchema).nonempty(),
  translations: z.record(z.string(), txProjectSchema),
})
export type Project = z.infer<typeof projectSchema>

export const translatedProjectSchema = projectSchema
  .omit({ translations: true })
  .extend(txProjectSchema.shape)
  .extend({
    lang: z.string(),
    language_variants: z.array(z.object({ lang: z.string(), url: z.string() })),
  })
export type TranslatedProject = z.infer<typeof translatedProjectSchema>
