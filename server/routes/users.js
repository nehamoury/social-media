const express = require('express');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

// GET /api/users - Get all users (channels)
router.get('/', async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                username: true,
                fullName: true,
                avatar: true,
                bannerImage: true,
                description: true,
                subscribers: true,
                _count: {
                    select: { videos: true }
                }
            },
            orderBy: { subscribers: 'desc' },
            take: 20
        });

        res.json({ users });
    } catch (error) {
        console.error('Get users error:', error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

// GET /api/users/:id - Get user by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const user = await prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                username: true,
                fullName: true,
                avatar: true,
                bannerImage: true,
                description: true,
                subscribers: true,
                createdAt: true,
                _count: {
                    select: { videos: true }
                },
                videos: {
                    select: {
                        id: true,
                        title: true,
                        thumbnail: true,
                        duration: true,
                        views: true,
                        createdAt: true
                    },
                    orderBy: { createdAt: 'desc' },
                    take: 12
                }
            }
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ user });
    } catch (error) {
        console.error('Get user error:', error);
        res.status(500).json({ error: 'Failed to fetch user' });
    }
});

module.exports = router;
