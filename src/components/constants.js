const characters = {
    ROOK: 'rook',
    KNIGHT: 'knight',
    BISHOP: 'BISHOP',
    QUEEN: 'queen',
    KING: 'king',
    PAWN: 'pawn'
};

const players = {
    WHITE: 'white',
    BLACK: 'black'
};

export const initialBoardValues =
    [
        [
            players.BLACK + characters.ROOK,
            players.BLACK + characters.KNIGHT,
            players.BLACK + characters.BISHOP,
            players.BLACK + characters.QUEEN,
            players.BLACK + characters.KING,
            players.BLACK + characters.BISHOP,
            players.BLACK + characters.KNIGHT,
            players.BLACK + characters.ROOK
        ],
        [
            players.BLACK + characters.PAWN,
            players.BLACK + characters.PAWN,
            players.BLACK + characters.PAWN,
            players.BLACK + characters.PAWN,
            players.BLACK + characters.PAWN,
            players.BLACK + characters.PAWN,
            players.BLACK + characters.PAWN,
            players.BLACK + characters.PAWN
        ],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [
            players.WHITE + characters.PAWN,
            players.WHITE + characters.PAWN,
            players.WHITE + characters.PAWN,
            players.WHITE + characters.PAWN,
            players.WHITE + characters.PAWN,
            players.WHITE + characters.PAWN,
            players.WHITE + characters.PAWN,
            players.WHITE + characters.PAWN
        ],
        [
            players.WHITE + characters.ROOK,
            players.WHITE + characters.KNIGHT,
            players.WHITE + characters.BISHOP,
            players.WHITE + characters.QUEEN,
            players.WHITE + characters.KING,
            players.WHITE + characters.BISHOP,
            players.WHITE + characters.KNIGHT,
            players.WHITE + characters.ROOK
        ]
    ];
