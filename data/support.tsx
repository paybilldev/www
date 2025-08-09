import { ArrowUpRight } from 'lucide-react'
import { IconDiscord, IconDiscussions, IconGitHubSolid } from '~/components'

const data = {
  meta_title: 'Help & Support | Paybill',
  meta_description:
    'Find help and support for Paybill. Our Support team provide answers on all types of issues, including account information, billing, and refunds.',
  hero: {
    h1: 'Support',
    title: 'Hello, how can we help?',
  },
  cards: [
    {
      title: 'Issues',
      paragraph: "Found a bug? We'd love to hear about it in our GitHub issues.",
      links: [
        {
          label: 'Open GitHub Issue',
          link: 'https://github.com/paybilldev/paybill/issues',
          target: '_blank',
          icon: <IconGitHubSolid />,
          type: 'default',
        },
      ],
    },
    {
      title: 'Feature requests',
      paragraph: 'Want to suggest a new feature? Share it with us and the community.',
      links: [
        {
          label: 'Request feature',
          link: 'https://github.com/orgs/paybilldev/discussions/categories/feature-requests',
          target: '_blank',
          icon: <IconGitHubSolid />,
          type: 'default',
        },
      ],
    },
    {
      title: 'Ask the Community',
      paragraph:
        'Join our GitHub discussions or our Discord server to browse for help and best practices.',
      links: [
        {
          label: 'Ask a question',
          link: 'https://github.com/paybilldev/paybill/discussions',
          target: '_blank',
          icon: <IconDiscussions />,
          type: 'default',
        },
        {
          label: 'Join Discord',
          link: 'https://discord.gg/v9rYchap',
          target: '_blank',
          icon: <IconDiscord fill="hsl(var(--background-default))" />,
          type: 'secondary',
        },
      ],
      className: 'col-span-full xl:col-span-1',
    },
  ],
  banner: {
    title: "Can't find what you're looking for?",
    paragraph: (
      <>
        <p className="text-foreground-light">The Paybill Support Team is ready to help.</p>
        <p className="text-foreground-lighter text-sm">
          Response time for support tickets will vary depending on plan type and severity of the
          issue.
        </p>
      </>
    ),
    links: [
      {
        label: 'Contact Enterprise Sales',
        link: 'https://paybilldev.zohodesk.com/portal/en/newticket',
        target: '_blank',
        type: 'default',
      },
      {
        label: 'Open Ticket',
        link: 'https://cloud.paybill.dev/support/new',
        target: '_blank',
        icon: <ArrowUpRight />,
        className: '!text-foreground-light hover:!text-foreground',
        type: 'text',
      },
    ],
  },
}

export default data
