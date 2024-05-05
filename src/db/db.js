// import { Pool, neonConfig } from '@neondatabase/serverless'
// import { PrismaNeon } from '@prisma/adapter-neon'
// import { PrismaClient } from '@prisma/client'
// import dotenv from 'dotenv'
// import ws from 'ws'
const {Pool, neonConfig} = require('@neondatabase/serverless')
const {PrismaNeon} = require('@prisma/adapter-neon')
const {PrismaClient} = require('@prisma/client')
const dotenv = require('dotenv')
const ws = require('ws')


dotenv.config()
neonConfig.webSocketConstructor = ws
const connectionString = `${process.env.DATABASE_URL}`

const pool = new Pool({ connectionString })
const adapter = new PrismaNeon(pool)
const db = new PrismaClient({ adapter })

module.exports = db
