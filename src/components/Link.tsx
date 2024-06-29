function Link({ url, title }: {url?: string; title?: string}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  )
}

export default Link