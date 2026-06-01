import { withBadge } from './_sidebar-badge';

export default {
  index: 'Introduction',
  quickstart: 'Quickstart',
  paywall: 'Paywalls',
  'sdk-v3': {
    title: withBadge('SDK v3', 'new')
  },
  'sdk-v2': {
    title: withBadge('SDK v2', 'legacy')
  },
  'payment-processor': 'Payment Processor',
  'api-provider': 'API Provider',
  'custom-domains': 'Custom Domains',
  webhooks: 'Webhooks',
  guide: 'Guide',
  offers: 'Offers',
  faq: 'FAQ',
  '--for-ai-agents': { type: 'separator', title: 'For AI agents' },
  'llms-sdk-v3-txt': {
    title: 'llms-sdk-v3.txt (SDK 3.0 pack)',
    href: '/llms-sdk-v3.txt'
  },
  examples: {
    title: 'Examples',
    type: 'page',
    href: 'https://monetize-software-sdk-nextjs-example.vercel.app/',
    newWindow: true
  },
  'ai-agent-pack': {
    title: 'AI agent (llms.txt)',
    type: 'page',
    href: '/llms-sdk-v3.txt',
    newWindow: true
  },
  roadmap: {
    title: 'Roadmap',
    type: 'page',
    href: 'https://monetizesoftware.featurebase.app/en'
  }
};
