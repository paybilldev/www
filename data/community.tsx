import staticContent from '~/.contentlayer/generated/staticContent/_index.json' with { type: 'json' }

const { githubStars, twitter, discord  } = staticContent

type CommunityItem = {
  title: string
  stat: string
  statLabel: string
  img: string
  detail: any // some component to show when selected
  invertImgDarkMode?: boolean
}

const data: CommunityItem[] = [
  {
    title: 'GitHub',
    stat: `${githubStars}+`,
    statLabel: 'GitHub stars',
    img: 'github.png',
    invertImgDarkMode: true,
    detail: () => (
      <div>
        <p>Some growth chart?</p>
      </div>
    ),
  },
  {
    title: 'Twitter',
    stat: `${twitter.followers}+`,
    statLabel: 'Followers',
    img: 'twitter.png',
    detail: () => (
      <div>
        <p>Some twitter callouts</p>
      </div>
    ),
  },
  {
    title: 'Discord',
    stat: `${discord.members}+`,
    statLabel: 'Paybill Troopers',
    img: 'discord.png',
    detail: () => (
      <div>
        <p>Something great</p>
      </div>
    ),
  },
]

export default data
