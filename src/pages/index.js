import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import CodeBlock from '@theme/CodeBlock'

const features = [
  {
    title: 'Modular, Composable, Scalable',
    imageUrl: 'img/modular.svg',
    description: (
      <>
        Veramo was designed from the ground up to be flexible and modular making it highly scalable. Create an
        agent, add plugins, run on server or mobile. You can also expose your agent over REST.
      </>
    ),
  },
  {
    title: 'Awesome CLI',
    imageUrl: 'img/cli-tool.svg',
    description: (
      <>
        The Veramo core API is exposed by our CLI tool. Get started quickly creating DIDs and VCs from your
        terminal or run a local cloud agent. Developers will love the plugin development tools included.
      </>
    ),
  },
  {
    title: 'Multi-Platform',
    imageUrl: 'img/multi-platform.svg',
    description: <>Veramo runs on Node, Browsers, and React Native right out of the box.</>,
  },
]

const textContent = {
  cleanApi: 'Clean API backed by TypeScript',
  cleanApiContent:
    'Veramo has a simple and clean API that is easy to reason about. This example bootstraps your agent with minnimal configuration.',
  pluginsTitle: 'Plugins at the core',
  plugins:
    'Veramo is powered by a flexible plugin system. We have a growing list of core plugins and adding your own custom plugin is easy.',
  codeExample: `
  import { createAgent } from '@veramo/core'
  import { KeyManager } from '@veramo/key-manager'
  import { DIDManager } from '@veramo/did-manager'
  import { CredentialIssuer } from '@veramo/credential-w3c'

  /* Configure the agent */
  const agent = createAgent({
    plugins: [
      new KeyManager(/* config */),
      new DIDManager(/* config */),
      new CredentialIssuer(),
    ],
  })

  /* Create an identifier and optionally link to an existing user */
  const user = await agent.didManagerGetOrCreate({
    alias: 'alice'
  })

  const verifiableCredential = await agent.createVerifiableCredential({
    credential: {
      issuer: { id: 'did:web:sun.veramo.dev' },
      credentialSubject: {
        id: user.did,
        tutorial: 42,
        status: 'completed'
      }
    },
    proofFormat: 'jwt',
    save: true
  })

  `,
  cliExample: `
  /* Install the CLI globally */
  $ npm install @veramo/cli -g

  /* Resolve a DID */
  $ veramo did resolve did:web:sun.veramo.io

  /* Create an identifier */
  $ veramo did create

  /* Create a verifiable credential */
  $ veramo credential create

  /* Run a local cloud agent */
  $ veramo server
  `,

  multiPlatform: `
  Veramo runs on Node, Browsers, and React Native straight out of the box. 
  
  Save time by using the same API across all platforms.
  `,
  orchestrateStandards: `Start building the trust layer in your applications today with Veramo. We obsess over standards
  and interoperability making it easy to support a wide list of standards in the data verification space.`,
  awesomeCLITitle: 'Awesome CLI',
  awesomeCLI: `No framework is complete without a fully featured CLI tool that gives you access to all the core functionality from your terminal. Veramo's CLI tool contains everything you need to get started.`,
}

function VerifiableData() {
  return (
    <section className={'oddRow'}>
      <div className={'container tooling'}>
        <div className="container" style={{ textAlign: 'center', padding: 100 }}>
          <h1 style={{ fontSize: '3rem' }}>Verifiable Data is the new standard</h1>
          <p className={'promoText'} style={{ fontSize: 18 }}>
            We live in a data driven, digital world and make decisions based on reputation. Off-chain
            verifiabilty is a critical building block for the economy of tomorrow. Veramo gives you the tools
            to start building trust network that accelerate decision making, efficiency and productivity.
          </p>
          <div className="row">
            <Feature imageUrl="img/vc_pass.svg" />
            <Feature imageUrl="img/vc_kyc.svg" />
            <Feature imageUrl="img/vc_access.svg" />
          </div>
        </div>
      </div>
    </section>
  )
}

function CleanAPI() {
  return (
    <section style={{ paddingBottom: 150 }}>
      <div className={'container tooling'}>
        <div className="container" style={{ textAlign: 'center', paddingTop: 100, paddingBottom: 50 }}>
          <h1 style={{ fontSize: '3rem' }}>{textContent.cleanApi}</h1>
          <p className={'promoText'} style={{ fontSize: 18 }}>
            {textContent.cleanApiContent}
          </p>
        </div>
      </div>
    </section>
  )
}

function Plugins() {
  return (
    <section className={'oddRow'}>
      <div className={'container tooling'}>
        <div className="container" style={{ textAlign: 'center', paddingTop: 100, paddingBottom: 150 }}>
          <h1 style={{ fontSize: '3rem' }}>Plugins</h1>
          <p className={'promoText'} style={{ fontSize: 18 }}>
            {textContent.plugins}
          </p>
          <div className="row">
            <Feature title="id-manager" />
            <Feature title="did-provider-ethr" />
            <Feature title="did-provider-web" />
            <Feature title="key-manager" />
            <Feature title="kms-local" />
            <Feature title="did-comm" />
            <Feature title="did-jwt" />
            <Feature title="message-handler" />
            <Feature title="selective-disclosure" />
            <Feature title="credential-w3c" />
            <Feature title="remote-server" />
            <Feature title="data-store" />
            <Feature title="remote-client" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Code() {
  return (
    <section className={styles.codeBg}>
      <div className={'container tooling'}>
        <div className={'row'}>
          <div
            style={{
              width: '100%',
              border: 0,
              borderRadius: 4,
              overflow: 'hidden',
              marginTop: -150,
              boxShadow: '0 25px 50px -12px rgb(0 0 0 / 25%)',
            }}
          >
            <CodeBlock language="typescript" style={{ height: '100%' }}>
              {textContent.codeExample}
            </CodeBlock>
          </div>
        </div>
        <div className="container" style={{ textAlign: 'center', paddingTop: 100, paddingBottom: 50 }}>
          {/* <h1 style={{ fontSize: '3rem', color: 'white' }}>Plugins included</h1> */}
        </div>
      </div>
    </section>
  )
}

function AwesomeCli() {
  return (
    <section style={{ paddingBottom: 150 }}>
      <div className={'container tooling'}>
        <div className="container" style={{ textAlign: 'center', padding: 100 }}>
          <h1 style={{ fontSize: '3rem' }}>{textContent.awesomeCLITitle}</h1>
          <p className={'promoText'} style={{ fontSize: 18 }}>
            {textContent.awesomeCLI}
          </p>
        </div>
      </div>
    </section>
  )
}

function Cli() {
  return (
    <section className={styles.codeBg}>
      <div className={'container tooling'}>
        <div className={'row'}>
          <div
            style={{
              width: '100%',
              border: 0,
              borderRadius: 10,
              overflow: 'hidden',
              marginTop: -200,
              boxShadow: '0 25px 50px -12px rgb(0 0 0 / 25%)',
            }}
          >
            <img className={styles.cliAnimation} src="img/veramo_cli.gif" alt="Veramo CLI" />
          </div>
        </div>
        <div className="container" style={{ textAlign: 'center', padding: 100 }}></div>
      </div>
    </section>
  )
}

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center" style={{ marginBottom: 10 }}>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      wrapperClassName={'home-page'}
      title={`Veramo - A JavaScript Framework for Verifiable Data`}
      description={siteConfig.tagline}
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--primary button--lg button--square getStarted',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/fundamentals/introduction')}
            >
              Get Started
            </Link>
            <Link
              className={clsx('button button--secondary button--lg button--no-border', styles.learnMore)}
              to={useBaseUrl('docs/fundamentals/introduction')}
            >
              Learn more
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <VerifiableData />
      <CleanAPI />
      <Code />
      <Plugins />
      <AwesomeCli />
      <Cli />
    </Layout>
  )
}

export default Home
