import React from 'react'
import 'ClassificationStyles.css'

const ClassificationsContent = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='container-lg'>

          <div className='container' id='header'>
            <h1 className='primary'>Classifications</h1>
          </div>

          <br></br>

          <div className='container'>
            <div>
              <img alt="U" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/BBFC_U_2019.svg/105px-BBFC_U_2019.svg.png"></img>
            </div>
            <div>
              <h2 className='primary'> Universal</h2>
              <p className='primary'>
                Suitable for all. A U film should be suitable for audiences aged four years and over.
                May contain infrequent very mild language. May contain very mild sex references and mild violence, if justified by the context.
                Until 2009, there was also a Uc ("Universal Children") certificate, for videos that were particularly suitable for young children.
              </p>
            </div>
          </div>

          <div className='container'>
            <div>
              <img alt="PG" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/BBFC_PG_2019.svg/105px-BBFC_PG_2019.svg.png"></img>
            </div>
            <div>
              <h2 className='primary'>Parental Guidance</h2>
              <p className='primary'>
                General viewing, but some scenes may be unsuitable for young children. A PG film should not unsettle a child aged around eight or older.
                May contain mild language (frequent/aggressive use may result in the work being passed at a higher category) or sex/drug references. May contain moderate violence if justified by context (e.g. fantasy).
                Unaccompanied children of any age may watch, but parents are advised to consider whether the content may upset younger, or more sensitive, children.
              </p>
            </div>
          </div>

          <div className='container'>
            <div>
              <img alt="12A" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/BBFC_12A_2019.svg/105px-BBFC_12A_2019.svg.png"></img>
            </div>
            <div>
              <h2 className='primary'>12A</h2>
              <p className='primary'>
                Cinema release suitable for those aged 12 and over. No one younger than 12 may see a 12A film in a cinema unless accompanied by an adult.
                May contain adolescent themes, discrimination, soft drugs, moderate language, moderate violence, sex references and nudity. 
                Sexual activity may be briefly and discreetly portrayed. Use of strong language may be permitted based on frequency and how they are used, as well as contextual justification. 
                Occasional strong violence may be permitted if justified by the context.
              </p>
            </div>
          </div>

          <div className='container'>
            <div>
              <img alt="12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/BBFC_12_2019.svg/105px-BBFC_12_2019.svg.png"></img>
            </div>
            <div>
              <h2 className='primary'>12</h2>
              <p>
                Cinema release suitable for those aged 12 and over. No one younger than 12 may see a 12A film in a cinema unless accompanied by an adult.
                The 12 category applies to cinema releases from August 1989 to 2002, and home media since 1994. 
                The 12A category has been used for cinema releases since 2002.
              </p>
            </div>
          </div>

          <div className='container'>
            <div>
              <img alt="15" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/BBFC_15_2019.svg/105px-BBFC_15_2019.svg.png"></img>
            </div>
            <div>
              <h2 className='primary'>12</h2>
              <p className='primary'>
                Suitable only for 15 years and over. No one younger than 15 may see a 15 film in a cinema. No one younger than 15 may rent or buy a 15 rated video work. 
                May have fairly mature themes. May contain (frequent) strong language, strong violence, strong sex references, nudity without graphic detail and hard drugs. 
                Sexual activity may be portrayed but without any strong detail. Sexual violence may be shown if discreet and justified by context. 
                Use of very strong language may be permitted based on frequency and how it is used, as well as contextual justification.
              </p>
            </div>
          </div>

          <div className='container'>
            <div>
              <img alt="18" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/BBFC_18_2019.svg/105px-BBFC_18_2019.svg.png"></img>
            </div>
            <div>
              <h2 className='primary'>18</h2>
              <p className='primary'>
                Suitable only for adults. No one younger than 18 may see an 18 film in a cinema. No one younger than 18 may rent or buy an 18 rated video work.
                Films under this category do not have limitation on the foul language that is used. 
                Portrayals of illegal drug misuse are generally allowed, and explicit sex references along with detailed sexual activity are also allowed. 
                Scenes of strong real sex may be permitted if justified by the context (Sex works cannot be placed at "18"). 
                Very strong, gory, and/or sadistic violence is usually permitted. 
                Strong sexual violence is permitted unless it is eroticised or excessively graphic, in which a work will require compulsory cuts where possible.
              </p>
            </div>
          </div>

          <div className='container'>
            <div>
              <img alt="R18" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBFC_R18_2019.svg/105px-BBFC_R18_2019.svg.png"></img>
            </div>
            <div>
              <h2 className='primary'>R18</h2>
              <p className='primary'>
                To be shown only in specially licensed cinemas, or supplied only in licensed sex shops, and to adults only. R18 video works may not be supplied by mail order.
                Works under this category always contain hard-core pornography, defined as material intended for sexual stimulation and containing clear images of real sexual activity, 
                strong fetish material, explicit animated images, or sight of certain acts such as triple simultaneous penetration and snowballing. 
                There remains a range of material that is often cut from the R18 rating: strong images of injury in BDSM or spanking works, urolagnia, 
                scenes suggesting incest even if staged, references to underage sex or childhood sexual development and aggressive behavior such as hair-pulling or spitting on a performer are not permitted. 
                More cuts are demanded in this category than any other category.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default ClassificationsContent
