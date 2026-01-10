export interface JsonLdParams {
  data: object
}

const JsonLd = ({ data }: JsonLdParams) => {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    )
  }

export default JsonLd