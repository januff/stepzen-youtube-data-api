```graphql
type ChannelId {
  channelId: String
}

channelIdByQuery(query: String!): ChannelId
  @rest(
    endpoint: "https://youtube.googleapis.com/youtube/v3/search?key=$key&q=$query&part=snippet&order=relevance&type=channel&maxResults=1" 
    configuration: "youtube_config"
    resultroot: "items[].id"
  )
```