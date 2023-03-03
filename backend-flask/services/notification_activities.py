from datetime import datetime, timedelta, timezone
from opentelemetry import trace

tracer = trace.get_tracer('activities-notification')


class NotificationActivities:
    def run():
        now = datetime.now(timezone.utc).astimezone()
        results = [
            {
                'uuid': '68894h6b0-1ceb-4a33-8b4e-d90fa7109eee',
                'handle':  'Choco Taco',
                'message': 'Here, imma do a thing',
                'created_at': (now - timedelta(days=2)).isoformat(),
                'expires_at': (now + timedelta(days=5)).isoformat(),
                'likes_count': 578,
                'replies_count': 0,
                'reposts_count': 983,
                'replies': [],
            },
            {
                'uuid': '68f126b0-1ceb-4a33-88be-d90fa7109eee',
                'handle':  'Andrew Brown',
                'message': 'Wait till you see Week 2',
                'created_at': (now - timedelta(days=2)).isoformat(),
                'expires_at': (now + timedelta(days=5)).isoformat(),
                'likes_count': 5,
                'replies_count': 1,
                'reposts_count': 0,
                'replies': [{
                    'uuid': '26e12864-1c26-5c3a-9658-97a10f8fea67',
                    'reply_to_activity_uuid': '68f126b0-1ceb-4a33-88be-d90fa7109eee',
                    'handle':  'Worf',
                    'message': '🤬',
                    'likes_count': 0,
                    'replies_count': 0,
                    'reposts_count': 0,
                    'created_at': (now - timedelta(days=2)).isoformat()
                }],
            }
        ]
        return results
