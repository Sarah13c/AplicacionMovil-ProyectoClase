import { Injectable } from '@angular/core';
import { FotoHeroe } from '../interfaces/fotosHeroe.interface';

@Injectable({
  providedIn: 'root'
})
export class FotosHeroeServiceService {

  fotosHeroes: FotoHeroe[] = [
    {
      idHeroe: 1,
      urlFoto: 'https://wallpapersmug.com/download/1600x900/b53ddf/movie-jason-momoa-art.jpg',
      id: 1,
    },
    {
      idHeroe: 1,
      urlFoto: 'https://wallpapersmug.com/download/1600x900/31770c/aquaman-8k.jpg',
      id: 2,
    },
    {
      idHeroe: 1,
      urlFoto: 'https://bestwallpapers.in/wp-content/uploads/2018/07/aquaman-and-mera-art-4k-wallpaper-1600x900.jpg',
      id: 3,
    },
    {
      idHeroe: 2,
      urlFoto: 'https://wallpapersmug.com/download/1600x900/52aff6/batman-throne-dark-art.jpg',
      id: 4,
    },
    {
      idHeroe: 2,
      urlFoto: 'https://www.desktopbackground.org/download/1600x900/2012/04/22/378518_ultra-hd-4k-batman-wallpapers-hd-desktop-backgrounds-3840x2400_3840x2400_h.jpg',
      id: 5,
    },
    {
      idHeroe: 2,
      urlFoto: 'https://onlygames.com.ar/wp-content/uploads/2019/10/Batman-Arkham-Legacy.jpg',
      id: 6,
    },
    {
      idHeroe: 3,
      urlFoto: 'https://wallpapersmug.com/download/1600x900/f0302d/daredevil-bosslogic-4k.jpeg',
      id: 7,
    },
    {
      idHeroe: 3,
      urlFoto: 'https://3.bp.blogspot.com/-0x00FMnqMAk/WCf5zGZt53I/AAAAAAAACMs/hg7j73XhiyQaulMXHBEsmn9WkxT872dywCK4B/s1600/DaredevilWallpaperHD_MarvelSpoilerOficial.png',
      id: 8,
    },
    {
      idHeroe: 3,
      urlFoto: 'https://editors.dexerto.com/wp-content/uploads/2024/01/02/daredevil-height-header.jpg',
      id: 9,
    },
    {
      idHeroe: 4,
      urlFoto: 'https://wallpapersmug.com/download/1600x900/6877f2/hulk-smash-4k.jpg',
      id: 10,
    },
    {
      idHeroe: 4,
      urlFoto: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFhUZGRUaHB4ZGBgYGhgjGh4cGBgaGRgYGhkcIS4lHh4wHxkYJjgmKy8xNTU1HCU7QDs1Py40NTEBDAwMEA8QHxISHzQrJSw2NDQ0NDY0NDQ9Nj00ND01NDQ0NjQ0NDQ0NjQ2NDQ0NDQ2NDQ0NDQ0NDQ0NDQ0NDQ0Nf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAECAwUGBwj/xAA5EAACAQIEBAQDBwIGAwAAAAABAgADEQQSITEFIkFRBmFxgRMysUJSkaHB0fAHFCNicoKS4aKy8f/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACYRAAMAAgIBBAICAwAAAAAAAAABAgMREiExIkFRYQQUcZETMoH/2gAMAwEAAhEDEQA/APGYiJYCIiAIiIAiIgCIiAIiIAiIgCJW0rlgFsS/LK5I0DHEyZZTLGgWRK2i0ApERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBESsApKgSoGtpISlAMAWZFpyStOXhJJBGWnLxTkgJLskAjinK/DmfJK5IGyP8ADlDTknJKZIGyKacxtSk74ctKQCA1OYys2LU5ielAIMSQ1KYSJGiS2IiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAVAkjC07t7XmJN79tfzk3BWBJ6afqex+klIgrWweUFtdLHYEasVHMpNvlMtpVwSBb84xLlmGclSAAbrqNL7ADck/j13mEAA6G4GxAOvsYBscsrlmYLLvhyeJXZgCSoSZvhyopydDZhyRkkxaF5euHjRHNENKV5V6NpPFOWtSvJ4leSNeUlCkl/DljJI4luRFyS1kksU5bUTlPpGieRp6lFyM2Vsv3rNl7b7SKSZu6dVcgX41VXDAhRbIBfdecENc3vb95rKyjMQCSLmxO5AJsTYnX3Mq0W2RpSZcrXyi+vQX19pYyEbgj1kMktiIgCIiAIiIAiIgCIiAIiIAiIgCIiAJWUl6rfYXMIGSnSOa1tfLuRpJdHlW9hrfcA/ZtsfWWYembduvnex/cyVTXT9Pe/fyl1JXYevna5VF3JKqovmINjmuLDYeUsqqOgA9AB9DaVpi7ddP01k18K24Rrdzr+dhCD6ZZQc7ESXkm44J4eepzsrJTH2j18lB3P5fSTqmPbDvegfhAaXAGdrdWc6/zpM7/Jxw+K7fx8FOF12ul8nNBeltZMwHDWquEQanqdh3J8pvqfjHEsQruHU2uHRG9tRpLsTxqgnMlJlcjmsbIfbcegMr+2t6csl4KfaZoThCrsguwBIDdx3tMww45mc2RFLMR2HQeZNh7zaJ44xKiyCkqj7IpoRbz0kDxDxatjBSorQRGd+ZkTLnJ+XN/lGp9pb9pa1rX2U/XrltvZo18T10fNSc00vcILEDtmuOc+t5PqeNK7EGpSo1FsFKvTUHTrnWzZ/Pz2msqcMRahp57sDlJsLXHzW676dJsk8Nl1Yi90G+t73tYXHp5TPnPk0cpdFlDEJXV3RMjpqyXuuUm2Zb6i1xcG+8wsJm8N8MZ8U9EWz/AA3yhmC3PLYXOlz2l+NwD0nKOhVh0I/l51YXyTWzmy1xrfsQ1EsxHymZ0pntMdddCJrUaWyIyqqSRGTENTVTTqtmO4AIym2XQnRtDa8wYnCFHqKwIdTYhstwftXyki/oTLwguM1wt9SN7dbedpIxyYYW/tmqFLnMKuW9weW2VQLZbe8y0dRqMNTY1gFYIdbMbWHLfr/NZj4gjKwDMG0uCLbH09JbixzEyKZnRZCIiVJEREkCIiAIiIAiIgCIiQBERAEREATNhy19N/P/ALmGSMOt/wAZMrsh+Cfkv/O+v6GdLwrg6KoevfUXSkpszDoXP2Ft7nyG+Dw1wsMfj1R/gJsD9txsg7qN2O3TrJeMxzszWYG9zmt726W3PeZZ8z3wjz7smYWts3OE4wad1oU6FI/6FZrDa7tcn1vMqeOsS4IcUnUaaIoGbob2O29pw1R3Lasc3mZMptayAaDrOd42k9ve/sun9HoOH4pnF0JJ27kk5s7kemmum05fHvTZiM+/Uka9gel5q8RjWBCq2UAXNm3tspt562kRMW7HQj3nPi/F406TNKybSRMxNELqh26eu01+Jx1xbUfv5TYUaZa5La9LC/5m0rV4ah1I176fQGdM0p/2Mmn7GmoV2YjKLm/W366TecOxxp1c768uVQDcBujeehP4+U17YJk+S34C/tMeJuCCbi/fcWl6U317MJ8SViHSobsouNSRfU+QuNZ2eE4AHyEYnKuRSFv/AIZIUAMAeo5QQd7jWcA9SsrhqAzcoDLkVrnW4yEEnfcDrOw4NisSVD16ap0poqhQVGrHKL21F+mxlLTmdr+jLI9rZC43QCYkuhGYKo0tfKPtabXJ/wDGbmn4gpYmktDFLlZRyVlF2XyYfaE0HjHBtTqs2VQSQXKtmGYqpGYfZa1tPSajBYgGxJFgdjtNI5KVSfaMqW0d7T8GuVDpXoFGuqnPa9wQNxofKc9xjw3iaAJqUmC/fXmT1zLoPeRquNCqVViMwsQCcp9ZuuA8cxKMAKpdALFSdCDpbXQ+80/bya9SRnGKJapJo42vS0PpMLsWQA+QGgBsNANPTfedz4q4FTypiqRCUKhysttKdQa5QOimxsOhv0tOMxNOxAX8Rt301PedMNUuSOnezUYhNTaQn3m1rU5q6g1Mil0SvJZaIiYlhERJAiIgCIiAIiIAiIkAREQBAiJKBcJ3PAuC0aCo+Kpu9VrMlAaKFPymoRrmO+XoLX3sMXhvDUhQDU1NTFG7CwSykMQAWfUcoB5bHXftsEqvVdmQqKll5XbKdALrr5j8JhkyU/TPS92G0k37mbiGOq13dgiqFXkproqIo+RVAt9NTNK+MYi17D7th+0uxmOroxGQq7Ehs29x0W3TzmLH4b4CUarENUqKzqu4VVbKpZT1JDfhIjGjOap+TBiMMzgMqnuNDb6TIvDagQMxXmNgpIzH/bfaTqLl0u7lntoWPcDTXQAEbec2fFsOvxKSo2WyAn5DawuDYtr8vW3Te86v8SU9shVTfg0NDhbubBQD3YgASdX4dRoplD56rfM6iyINDZb/ADH2mywtRlHyEg/asbX2OtrSvEuGsRcansP2lZUt9lss3K6NDjcA6NZWLLbMpuRddwRa31lcMn3lN/fabDiaVUpIrKA9MkGxUizcy6qTb7Q9pATHgkZl5v5rfrOa002jSWmk2SSijVTY/wA0kjC4apUYLlLLmBta++moGsiMCx0N5v8AglKqGBBW6HNzhrH/AHoDbpMn0UpmpqUEw2JK5fiJT3DcpuRcrmGpteYsVx+sxKqRTQgKAo1Cg3sG37Xkarii9Wo9wxZ2LWJKnXoSNpnw5RjZl/Db/qXfT20KlNbIy0Hcteo7E6sSb36XJ6+smp4bbLdFLPuF7i+uh128p0nD8DRcDKdTbQ3A97WvN3QphLoCrZbGxvsb3ytY2IsDfz6byObfgx7NPwrgmHY5DowAvc2IuNOU7a95ucT4ZCDOjFNO3l1uDv31A/KZK2Hw1azF3DqCAd3X/KQBYrf8fzkLAcZZc1A1fiFAxsBrlUXOgF/bWZ0+u+ydIn4PhqVKNTDPdaTlSp+0rbhh3OYD1DGedca8N4jDsTUpOUUkCoqk0yBs2YaAHfW09MYh6NOsmoZQ112uRewJ2b5bTW8Y4tWzI1OsUduVqeW6ORck3OgBF9LHqNJthzvH6Wido8nxdA2vbSaGvvPV+O8E+PRbEYdPh1kBatRTRWUC5qUl6EblRvuNd/K8WOYzuVTc7RaWR4iJkaCIiAIiIAiIgCIiSBERIAiIgCIiATcDj3pE5SQDuAbfgek2z8YpsiKEVSPnOxbyuN+5JnOS4nW9vaRxTIaTOsPGUBaobtkUCkrkkltANtgNT7DvIPDMRUZzW+apmRUJAKi5sRl2sFOna00dI6/Wdp4boUmoqHRy5qPUV1AyLkQaVD2OVreZhJT2Wmd9E+jhlc0yv38jA2tdGuWPkVYTDxFHNbmFhcBb32UAkDpbU9Jk4RcZXzpYsRYkXIAvmC72I0v3IlzcQZ2YOqn5gGFwVuTzBQwUnW2vYStZPJvOHwbzhdYNRyI+ZrAEKFFi7G+ZjzH2ElNTKEOBzLa1xpe/UbH/AKnL8OSohVwbBj0sb5T+W/W09B4fSNVfkzC+9iNRvbyuZlGSVXZbNhpz0V4/gjVYs55aiAGwFgbaH2Ous8krU2p1GRhYgkHsbGe84vDVGQoEUggAE6EWsT+onlH9RAoxT6AagWH+lbe+95N2qrr+Dn4OZNXTcAftNzwjjjUAScrabEsDfsOhnL0anQMbdRL6tIKqkk3J0vfYf9yjlbMK22WYDEkFkyjUk+epJ6+s3WApZmGZOXS9hNLVpHOHXfqB+k6ThlSwvcg27Ee3nIy+NotVdHQYXCpe2Rrbiym+vqPzm/p8Pw4VnzOFC3YsWIVVuWNm02/OafgmHqOrO5KUFOpzG7HyA/eabjPGXqco5KAfKqeRU2L/AHj+QvK4pqn8L5Ey67NRxziRxLkMgSiAQqruB0drWzvqDrppYWmv4G7U3IDhKqksj35WH2kv2IJ+hkrFUsqMdDm6gKNiOg9TNWF0nc8c1Op6FQ9Ho/CuMrSUUXXIttARYLr8hba2pyv/ALT0I2XEMHTcqS+XKQ5ewNtCuW33iCdPUzzGhxKoqFEcXFsquLgi2osdtpfw3iNfOGNQhhtcLYegtYbdJy1iqfJk00en8Gwyh0ZLlwNHdiysNNtgLjoNvOeRf1D4IMLjKiLZUe1SmvZXvdfIKwZR5Cej8ISs4DLWp3vmemhK5gCLW8xYm+80v9YMMXSjWsuZLqxU35X1UnQbMpHq0tiycXr5LQeTRETc2EREAREQBERAEREAREQBERAEREAREQDNSe1/P+CdWar06WUMVUYdWZb6Z6rHKSPQn8ZyVIXNh10/Geof2FZWesiJVVmCrfKwWmlM02dhfQqTfKdjMsta0dOGdo5bCoQQcx0sOU2I8/zM69OFu6B+Z3YA2I2VSFBvqLZQdyDYD3i4LDpVyD4K0soyMw3Yi5FVjYb3XTXQbzq+H4qnUUr8O6plQuGAvlBCheXS4tc36nfc8eXLtndEcUSfDPBVqKhJuELBlNwASbjLoARbKbj9J3GDwqoMqqAB9esgcF4elJbICofmsTfU+56fSbYuFv0AFyfqTL4oS9TOLPkdVpeCDx3iaYek1RyLgco6k9J8+8f4qa9TO3zE83mdrze/1A8Triax+GW+EoyqTsbbsB0uZwdV7zrmN9s5myc1NTqDYy01nA+Ym21z07WmvLt3lrMT10llBV9myPGHAy5EPsf3mSn4jxCgBSoA6WJH4XmqlwUQ4n4K6R0/h3xpiKVdDWf4lBjlembBAraZkUWCkb38p2vinw9Zfj4dhVw515CpK3JNjl6azyMgTqvBfil8NVAa70m0ZCdLHQ//ACSpXsTzc9ozcTewRB0Vb+pF/wBpDqJ+H8sJ0nirhqrV+NT1oVBnQ9jbVD2t+05yr2/mvWJrXTOlpVPJeGRcMCXIHQN+36ylZ1UW3BNieo81PcSThsI92JQqbakkWsxBt6+8j8QIXJl3BJv5ixE12qWjnqddjFJicM+U1GUqxXlbUEbzbcPxtRiGxKvWoVAUcMTzKdypGgYWBB7qDNLxUVC6VHJY1AKigak5iTf1mx4YzHD5SpympyXBubjny9wLb9yR0nDe+K8bJmVts5rj/Czh6zU75k+am33kbVGPY20I6EGaueheKcAldFNNh8anmUJrdkGpANrXBDWF9bnrYTz2bY65T35IT2IiJckREQBERAEREARESQIiIAiIkAREQCVgKmV1YWupDC+1wbj6TtcFiaLhCS6OpetYi6sWBV2Zgbg3FxYG4nDURqB1OmpAGvcnQTqOF8QqvSODRFbMSyWtnzBMps5NiuUMbd5llnaOrA9HYeEVutNnOYAH5rsLWOZiDqbAmw3GUWnX+HcNnBZstndjmRcoIHKCFGi3y3tvqes5rg+GyUlJVvkRlykqRm1Ou4NjO24HRKogIOi/+xBP1M8unumvs7cnUbX8HSUrFdP5aecf1P8AF4pj+2osM7D/ABGG4GnIPXrOk8TeJ6ODouQwatlORR946KT5X1nz3j8U1R2dmJZiSxPcm5M9LHLcpP8A6eVTS8FKtQnWRby68yJhiVzXHpfWdPgzbMTCWzZcL4NVxDqiISzGwE9AwH9IXIBr11S9tEGY6/gPrIdJeQu/B5ei3NpIqUQNOs3ni3w5/Z1AqFymvM4sTbQm057Pc+cqq5LkvBdzxemXVKNhv7SxUPeSXp2AtY33bp7HrIo3kp7Ks9D8PVHrYKrSuS1MhxvquzD9faaCoNfqZ2n9J8QoZ1IGts2jHSxFidus5zxTQCVqqrogZwoHbW0ztvkmb/i6cufjshYKo9XOXZdCt2sBfQ9rDYCQeM5QVC7Zb39yP0kvhCLkYs1uawv5AGQONEZ+U3AUfufrLRXq0TknU7Ll4mjimrNkamgQX+VgoNubTKT59eslU8YEamUrKzKvylgyrr8uXQevMZyFc6zFFYp30Yb2jrm4ymH+KAwq1irKlRDyKzg53BI1NmNgBYEb6TkYMSZSQEREsBERIAiIkgREQBERAEREAREQBERIBmw9PMwB2uL23sSBoOp1nSYXhDu9qCuwPyEjmI+UnT3nM0luQJ9Cf0x4VTXDq2jPve21+kzyN9JHRiaUttHT8N4eooojhWygDbawA0vr0k+mq2tYW217eflLiu857xdjWoYSo4qCmw0TMAVY/cKkEkEXGmo6TFJJpaK1Te22eK+KseKtWq6sGUu+SxuuXO1ivcWC28pzm8zVyBoAQvQE30G2szYDD5z9fTvOmUpkwpltCmAvy3JOh7Drp/Npt+HYZ3IVVvfTQSmG4RVeslOmjMW1UKCTa9i3+nz2nu3hXwymFpqCA1XctbY9h+8eSjTZqfAvhpqIFWouVraA/Nr18hO0ZZkmGo1x+UrbWi8TxWkcPxXw4uKZ0cEDmIe9yCQbEDtfLp1E8l494Sr4Zmz2y3OVhqrWPT9p9BVayqrML5uttz+M8T8XccZq7qRfIcmttGGjWtpfNfac+CnPpXfudGX1erx7HGOe5JPUnYeQmNTMtR1NzbWW0Vuw9Z2I5md54JxYpMhBIZh0Omp1uOsyeM8MFZyNzubHckXt2Gs02DcIyFfvD6gn6T0XxTgjVwnxADy5WIC5iRcXAUe15z5fC+ma/h1qmn7nldJgEHqTIeMqa3H5+U2eIwlkQq6Ny6qrDODmOjKdc00OMbUi/lLw9s6c3jRArVLk6C/eYZnxFEra5GvaYJrs4xERAEREAREQBERAEREARESQIiIAiIgCIiQCTgjzi/We1/0945So0MtSpzM2YAEWC2AA8tifeImV+UbTT4M6XjHjGhRpM4bMei3GpOw9J4v4k47WxDGpVqFj9hL8qg7AD0lImcr1Myo09SxOhE6HwdwpsS7U0ZFygsXe2XQWA13JJA621PSImz8FT2/w7hKOHpqMyfFZV+I+dSSQPlDacoJNgAB7kmbn+9T76f8AJf3iJK8ElGxqffT/AJL+8xPi0++n/JYiVssjXVuLUl+Z11DA2Ol9POeHeL+Hold2pXKaFizKSXN8xuNyeUnzaInJFvmdThcGc666SlJNb3iJ3exxM6jhGEzsgzCy87kkWAB6zZeLePuVCK9kB+yx1FgNdf8ALf3MRMa7Nfxens5nhWMofFvicxQg6gkm9tCSNbTVcQrUzUfIDkJOXv8Az3lIl5SNMlMgupP7HeYiJSJZGLEREsVKhSdhK5D2MRIBSUiJIEREkCIiAf/Z',
      id: 11,
    },
    {
      idHeroe: 4,
      urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmTw00yqmPUd2v3j3vqk3UDDtYLYdcysuHV0ys9Yien8w2laOTGm1jL2U3UEZ_OLq87II&usqp=CAU',
      id: 12,
    },
    {
      idHeroe: 5,
      urlFoto: 'https://i.pinimg.com/originals/64/93/40/649340a5f9c712c20666f97f7f48b3bf.jpg',
      id: 13,
    },
    {
      idHeroe: 5,
      urlFoto: 'https://elcomercio.pe/resizer/w96oUe5k4BMdyEpxoIZFOVNnNsw=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BWSTALTVBNDUTPTDF5BNF5XJIU.jpg',
      id: 14,
    },
    {
      idHeroe: 5,
      urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0pPJn1m0YN8jr-uBzu8o3ESh8Qik3Uc370Q&usqp=CAU',
      id: 15,
    },
    {
      idHeroe: 6,
      urlFoto: 'https://cloudfront-us-east-1.images.arcpublishing.com/semana/K6EPHTSFUZGHTHLHUCWZESANH4.jpg',
      id: 16,
    },
    {
      idHeroe: 6,
      urlFoto: 'https://wallpapersmug.com/download/1600x900/dade03/black-and-red-spiderman-4k.jpg',
      id: 17,
    },
    {
      idHeroe: 6,
      urlFoto: 'https://uhdwallpapers.org/uploads/converted/18/04/08/spider-man-game-on-ps4-1600x900_59684-rm-90.jpg',
      id: 18,
    },
    {
      idHeroe: 7,
      urlFoto: 'https://wallup.net/wp-content/uploads/2017/11/17/188385-Wolverine.jpg',
      id: 19,
    },
    {
      idHeroe: 7,
      urlFoto: 'https://4kwallpapers.com/images/wallpapers/marvels-wolverine-1920x1080-12242.jpg',
      id: 20,
    },
    {
      idHeroe: 7,
      urlFoto: 'https://wallpapersmug.com/download/1600x900/a70ccb/the-wolverine-marvel-artwork.jpg',
      id: 21,
    }

  ]
  
  constructor() { }


  //Metodo que me trae todos los heroes
  getFotosHeroes():FotoHeroe[]{
    return this.fotosHeroes;
  }

  //Metodo que me trae un Heroe
  getUnaFoto(idFoto:number){
    return this.fotosHeroes[idFoto - 1 ];
  }

  getFotosIdHeroe(idHeroe:number):FotoHeroe[]{
    let busquedaFotosHeroes: FotoHeroe[] = [];

    for(let i = 0 ; i < this.fotosHeroes.length ; i++){

      let fotoheroeAComparar = this.fotosHeroes[i];


      if (fotoheroeAComparar.idHeroe == idHeroe ){
        busquedaFotosHeroes.push(fotoheroeAComparar);
      }

    }
    return busquedaFotosHeroes;

  }
  
  
}
