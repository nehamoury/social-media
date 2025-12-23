const express = require('express');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

// GET /api/videos - Get all videos
router.get('/', async (req, res) => {
    try {
        const { limit = 20, skip = 0 } = req.query;

        const videos = await prisma.video.findMany({
            select: {
                id: true,
                title: true,
                description: true,
                thumbnail: true,
                duration: true,
                views: true,
                createdAt: true,
                user: {
                    select: {
                        id: true,
                        username: true,
                        fullName: true,
                        avatar: true
                    }
                },
                _count: {
                    select: { comments: true, likes: true }
                }
            },
            orderBy: { createdAt: 'desc' },
            take: parseInt(limit),
            skip: parseInt(skip)
        });

        res.json({ videos });
    } catch (error) {
        console.error('Get videos error:', error);
        res.status(500).json({ error: 'Failed to fetch videos' });
    }
});

// GET /api/videos/:id - Get video by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const video = await prisma.video.findUnique({
            where: { id },
            include: {
                user: {
                    select: {
                        id: true,
                        username: true,
                        fullName: true,
                        avatar: true,
                        subscribers: true
                    }
                },
                comments: {
                    select: {
                        id: true,
                        content: true,
                        createdAt: true,
                        user: {
                            select: {
                                id: true,
                                username: true,
                                avatar: true
                            }
                        }
                    },
                    orderBy: { createdAt: 'desc' },
                    take: 20
                },
                _count: {
                    select: { comments: true, likes: true }
                }
            }
        });

        if (!video) {
            return res.status(404).json({ error: 'Video not found' });
        }

        // Increment view count
        await prisma.video.update({
            where: { id },
            data: { views: { increment: 1 } }
        });

        res.json({ video });
    } catch (error) {
        console.error('Get video error:', error);
        res.status(500).json({ error: 'Failed to fetch video' });
    }
});

// GET /api/videos/trending - Get trending videos
router.get('/trending', async (req, res) => {
    try {
        const videos = await prisma.video.findMany({
            select: {
                id: true,
                title: true,
                thumbnail: true,
                duration: true,
                views: true,
                createdAt: true,
                user: {
                    select: {
                        id: true,
                        username: true,
                        avatar: true
                    }
                }
            },
            orderBy: { views: 'desc' },
            take: 12
        });

        res.json({ videos });
    } catch (error) {
        console.error('Get trending error:', error);
        res.status(500).json({ error: 'Failed to fetch trending videos' });
    }
});

module.exports = router;
