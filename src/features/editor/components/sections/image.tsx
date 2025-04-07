interface Props {
  url: string
}

export function ImageSection({ url }: Props) {
  return <img src={url} />
}
