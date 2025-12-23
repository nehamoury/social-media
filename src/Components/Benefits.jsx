import React from 'react';
import { DollarSign, TrendingUp, Youtube, ShoppingCart } from 'lucide-react';

const Benefits = () => {
    const benefits = [
        {
            icon: DollarSign,
            title: 'Get paid by your fans',
            description: 'Accept money from your fans through tips.',
        },
        {
            icon: TrendingUp,
            title: 'Grow your audience',
            description: 'Join a growing community of young millennials & get new fans.',
        },
        {
            icon: Youtube,
            title: 'Simple transfer from YouTube',
            description: 'Upload your videos from YouTube with an easy link copy/paste.',
        },
        {
            icon: ShoppingCart,
            title: 'Make money with Amazon',
            description: 'Extra income through Amazon Affiliates on your channel.',
        },
    ];

    return (
        <div className="bg-white py-16 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Benefits;
