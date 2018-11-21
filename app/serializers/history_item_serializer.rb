class HistoryItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :imdbid, :year, :poster
end
