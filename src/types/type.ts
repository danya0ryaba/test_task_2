

export type Date = {
    ok: boolean,
    data: {
        matches: Match[]
    }
}

export type Match = {
    time: string,
    title: string,
    homeTeam: {
        name: string,
        players: {
            username: string,
            kills: number
        }[],
        points: number,
        place: number,
        total_kills: number
    },
    awayTeam: {
        name: string,
        players: {
            username: string,
            kills: number
        }[],
        points: number,
        place: number,
        total_kills: number
    },
    homeScore: number,
    awayScore: number,
    status: "Finished" | "Scheduled" | "Ongoing"
}