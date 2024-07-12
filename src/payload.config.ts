// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Documents } from './collections/Documents'
import { s3Storage } from '@payloadcms/storage-s3'
import { Pages } from './collections/Pages'
import { Menu } from './globals/Menu'
import LandingPageMenu from './globals/LandingPageMenu'


const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  // @ts-ignore
  collections: [Users, Documents, Media, Pages,],
  globals: [
    // @ts-ignore
    Menu, LandingPageMenu
  ],
  cors: [
     'http://localhost:4321',
     'http://localhost:4321/etusivu',
     'http://localhost:4321/*',
     'http://localhost:5173',
     'http://localhost:5173/*',
     'http://localhost:5173/etusivu',

   ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: {
          prefix: 'media',
        }
      },
      // @ts-ignore
      bucket: process.env.S3_BUCKET,
      config: {
        forcePathStyle: true, // Important for using Supabase
        credentials: {
          // @ts-ignore
          accessKeyId: process.env.S3_ACCESS_KEY_ID,
          // @ts-ignore
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        },
        region: process.env.S3_REGION,
        endpoint: process.env.S3_ENDPOINT,
      },
    }),
  ],
})
