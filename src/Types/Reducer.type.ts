export interface IReducer<T> {
  actionType: T
  newValue?: any
}
