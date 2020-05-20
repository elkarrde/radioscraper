from radio.utils.normalize import split_artist_title

from .common import timestamp_ms


async def load(session):
    url = 'http://streaming.narodni.hr/stream/now_playing.php'

    response = await session.get(url, params={
        'the_stream': 'http://live.narodni.hr:8059/;',
        '_': timestamp_ms(),
    })
    contents = await response.text()

    return split_artist_title(contents)
