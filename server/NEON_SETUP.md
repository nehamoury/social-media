# Neon Database Setup Guide

## Step 1: Create Neon Account & Project

1. Go to: https://console.neon.tech
2. Sign up with GitHub/Google (free tier available)
3. Click **"Create a project"**
4. Choose:
   - **Project name**: `oren-social-media`
   - **Region**: Choose closest to you
   - **PostgreSQL version**: 16 (latest)
5. Click **"Create project"**

## Step 2: Get Connection Strings

After project creation, you'll see the **Connection Details** page:

1. **For DATABASE_URL** (Pooled connection):
   - Click on **"Pooled connection"** tab
   - Copy the connection string
   - It looks like: `postgresql://username:password@ep-xxx-xxx.region.aws.neon.tech/dbname?sslmode=require`

2. **For DIRECT_URL** (Direct connection):
   - Click on **"Direct connection"** tab
   - Copy the connection string
   - Similar format but different endpoint

## Step 3: Configure .env File

1. Copy `.env.example` to `.env`:
   ```bash
   cd d:\socialmedia\backend
   copy .env.example .env
   ```

2. Open `.env` and paste your Neon URLs:
   ```bash
   DATABASE_URL="postgresql://your-username:your-password@ep-xxx.region.aws.neon.tech/neondb?sslmode=require"
   DIRECT_URL="postgresql://your-username:your-password@ep-xxx.region.aws.neon.tech/neondb?sslmode=require"
   JWT_SECRET="your-secret-key-here"
   PORT=5000
   ```

## Step 4: Run Prisma Migration

```bash
cd d:\socialmedia\backend
npx prisma migrate dev --name init
```

This will:
- Create all tables (User, Video, Comment, Like, Subscription)
- Generate Prisma Client

## Step 5: Start Backend Server

```bash
npm run dev
```

Server will start on: http://localhost:5000

## Verify Setup

Test the health endpoint:
```bash
curl http://localhost:5000/api/health
```

You should see: `{"status":"OK","message":"Server is running"}`

## Neon Dashboard Features

- **SQL Editor**: Run queries directly
- **Tables**: View your data
- **Metrics**: Monitor database usage
- **Backups**: Automatic backups on free tier

## Free Tier Limits
- ✅ 0.5 GB storage
- ✅ 1 project
- ✅ Unlimited queries
- ✅ Auto-suspend after inactivity (saves resources)

Perfect for development! 🚀
