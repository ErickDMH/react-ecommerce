import './productCard.css'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import AddRemoveButton from './addRemoveButton'
import React, { useMemo } from 'react'


export function ProductCard({product}) {
    const playImages = true
    const animationTime = useMemo(() => Math.floor(Math.random() * (30 - 10 + 1)) + 10, [])
    
    return (<div className='product-card'>
        <div className="glass"></div>
        {
            playImages && <div className="slider">
                <figure style={{animation: `${animationTime}s slidy infinite`}}>
                    {
                        product.images?.map((image, index) => {
                            return <img key={`${image.src}-${index}-${Date.now()}`} srcSet={image.srcset} src={image.src} />
                        })
                    }
                </figure>
            </div>
        }
        {
            product.images[0]?.src && <img src={product.images[0]?.src}/>
        }
        <div className="info">
            <p>{product.name}</p>
            <div className="chips">
            {
                product.tags?.map(tag => {
                    return <Chip key={tag.slug} label={tag.name} variant="outlined" size="small"/>
                })
            }
            </div>
            <div className="chips">
            {
                product.attributes?.map((attribute, index) => {
                    return <div key={`${attribute.id}${index}`}>
                        <p>{attribute.name}</p>
                        <ButtonGroup variant="text" size="small">
                        {
                            attribute.terms?.map(term => {
                                return <Button key={term.slug}>{term.name}</Button>
                            })
                        }
                        </ButtonGroup>
                    </div> 
                })
            }
                <AddRemoveButton product={product} />
            </div>
        </div>
    </div>)
}

export default ProductCard