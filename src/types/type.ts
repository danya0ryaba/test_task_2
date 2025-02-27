export type DateMatches = {
    ok: boolean,
    data: {
        matches: Match[]
    }
}

export type TeamType = {
    name: string,
    players: {
        username: string,
        kills: number
    }[],
    points: number,
    place: number,
    total_kills: number
}

export type Match = {
    time: string,
    title: string,
    homeTeam: TeamType,
    awayTeam: TeamType,
    homeScore: number,
    awayScore: number,
    status: "Finished" | "Scheduled" | "Ongoing"
}