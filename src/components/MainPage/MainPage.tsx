import { useState } from 'react'

interface itemObject {
  imgSrc: string
  itemName: string
  description: string
}

const MainPage = (props: {
  data: any[]
  onBuyClick: (item: itemObject) => void
}) => {
  const { onBuyClick } = props

  return (
    <div className="columns">
      {props.data.map(
        (section: { sectionName: string; items: itemObject[] }) => {
          return (
            <div className="container" key={section.sectionName}>
              <div className="columns__title">{section.sectionName}</div>
              <div className="columns__row">
                {section.items.map((item) => {
                  return (
                    <div className="columns__column" key={item.itemName}>
                      <div className="columns__item">
                        <div className="item__row">
                          <div className="item__image">
                            <img src={item.imgSrc} alt="" />
                          </div>
                          <div className="item__body">
                            <div className="item__title">{item.itemName}</div>
                            <div className="item__text">{item.description}</div>
                            <a onClick={() => onBuyClick(item)}>
                              <div className="fas fa-shopping-cart item__icons"></div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        }
      )}
    </div>
  )
}

export default MainPage
