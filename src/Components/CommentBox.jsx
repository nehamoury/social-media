import React, { useState } from 'react';

export default function CommentBox() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    { id: 1, author: 'User 1', text: 'Great video!', timestamp: '2 hours ago' },
    { id: 2, author: 'User 2', text: 'Thanks for sharing this!', timestamp: '1 hour ago' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, {
        id: comments.length + 1,
        author: 'You',
        text: comment,
        timestamp: 'now'
      }]);
      setComment('');
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">{comments.length} Comments</h3>
      
      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
          rows="3"
        />
        <button
          type="submit"
          className="mt-2 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Comment
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((cmnt) => (
          <div key={cmnt.id} className="flex gap-3 pb-4 border-b">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold">{cmnt.author}</span>
                <span className="text-sm text-gray-500">{cmnt.timestamp}</span>
              </div>
              <p className="text-gray-700 mt-1">{cmnt.text}</p>
              <div className="flex gap-4 mt-2 text-sm">
                <button className="text-gray-600 hover:text-red-600">👍 Like</button>
                <button className="text-gray-600 hover:text-red-600">Reply</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
