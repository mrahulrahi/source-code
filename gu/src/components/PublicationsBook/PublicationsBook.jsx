import React from 'react';
import './pb.css';
import bookClose from '../../assets/images/book-img.svg';
import bookOpen from '../../assets/images/book-open-img.svg';
import Publicationsimg1 from '../../assets/images/Publications-img-1.png'
import Publicationsimg2 from '../../assets/images/Publications-img-2.png'

const publications = [
  {
    title: "GIT-A Song of Technocrates (2022)",
    closeImg: bookClose,
    openImg: bookOpen,
  },
  {
    title: "GIT-A Song of Technocrates (2022)",
    closeImg: bookClose,
    openImg: bookOpen,
  },
  {
    title: "GIT-A Song of Technocrates (2022)",
    closeImg: bookClose,
    openImg: bookOpen,
  },
  {
    title: "GIT-A Song of Technocrates (2022)",
    closeImg: bookClose,
    openImg: bookOpen,
  },
  {
    title: "GIT-A Song of Technocrates (2022)",
    closeImg: bookClose,
    openImg: bookOpen,
  },
  {
    title: "GIT-A Song of Technocrates (2022)",
    closeImg: bookClose,
    openImg: bookOpen,
  },
  {
    title: "GIT-A Song of Technocrates (2022)",
    closeImg: bookClose,
    openImg: bookOpen,
  },
  {
    title: "GIT-A Song of Technocrates (2022)",
    closeImg: bookClose,
    openImg: bookOpen,
  },
  {
    title: "GIT-A Song of Technocrates (2022)",
    closeImg: bookClose,
    openImg: bookOpen,
  },
  {
    title: "GIT-A Song of Technocrates (2022)",
    closeImg: bookClose,
    openImg: bookOpen,
  },
  {
    title: "GIT-A Song of Technocrates (2022)",
    closeImg: bookClose,
    openImg: bookOpen,
  },
  {
    title: "GIT-A Song of Technocrates (2022)",
    closeImg: bookClose,
    openImg: bookOpen,
  },
  {
    title: "GIT-A Song of Technocrates (2022)",
    closeImg: bookClose,
    openImg: bookOpen,
  },
  {
    title: "GIT-A Song of Technocrates (2022)",
    closeImg: bookClose,
    openImg: bookOpen,
  },
  {
    title: "GIT-A Song of Technocrates (2022)",
    closeImg: bookClose,
    openImg: bookOpen,
  }
  // Add more publications as needed
];

const PublicationsBook = () => {
  return (
    <div className="content-container position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">

                <div className="pb-list">
                    <div className="pb-item">
                            <div className="pb-text">
                                <h4>A Song of Technocrates</h4>
                                <p>Gandhinagar University has an annually published College Magazine titled ‘GIT: A Song of Technocrats’ since 2008. It caters to the varied literary interests of all stakeholders within Gandhinagar University and also serves as valuable memorabilia that commensurate the annual functioning of the prestigious university. It is an endeavour to give an outlet to the hidden talents and creativity. It is a show-case of the academic, extracurricular and co-curricular talents and skills of the students. The magazine offers a scan of achievements, laurels and acquisitions of the members of the university. It is a need of today’s students to make them become adaptable, lifelong learners and sensitive enough to become culturally versatile.</p>
                                <div className="pb-inner-img">
                                    <img src={Publicationsimg1} alt="" />
                                </div>
                            </div>
                            <div className="pb-book">
                            <div className="ppb-list">
                                {publications.map((publication, index) => (
                                <div className="ppb-item" key={index}>
                                    <div className="ppb-img">
                                    <div className="ppb-img stick">
                                        <img src={publication.closeImg} alt="Closed Book" />
                                    </div>
                                    <div className="ppb-img upstick">
                                        <img src={publication.openImg} alt="Open Book" />
                                    </div>
                                    </div>
                                    <div className="ppb-text">
                                    <h4>{publication.title}</h4>
                                    </div>
                                </div>
                                ))}
                            </div>
                            </div>
                    </div>
                    <div className="pb-item">
                            <div className="pb-text">
                                <h4>JET (Journal of Engineering and Technology)</h4>
                                <p> <strong> “Gandhinagar University – Journal of Engineering and Technology (GU-JET)” </strong> is a Peer Reviewed Journal which aims to provide an opportunity to research scholars, faculties, industry experts, working professionals and students to interact and share their research knowledge and experience, showcase their quality research outcomes in the field of all the branches of Engineering and Technology. GU-JET’s main objective is to strengthen the boundaries of the journal, the reviewer database, and to motivate potential authors to provide quality research with minimum plagiarism. Gandhinagar University – Journal of Engineering and Technology formerly known as GIT-Journal of Engineering and Technology (ISSN 2249-6157). </p>
                                <div className="pb-inner-img">
                                    <img src={Publicationsimg2} alt="" />
                                </div>
                            </div>
                            <div className="pb-book">
                            <div className="ppb-list">
                                {publications.map((publication, index) => (
                                <div className="ppb-item" key={index}>
                                    <div className="ppb-img">
                                    <div className="ppb-img stick">
                                        <img src={publication.closeImg} alt="Closed Book" />
                                    </div>
                                    <div className="ppb-img upstick">
                                        <img src={publication.openImg} alt="Open Book" />
                                    </div>
                                    </div>
                                    <div className="ppb-text">
                                    <h4>{publication.title}</h4>
                                    </div>
                                </div>
                                ))}
                            </div>
                            </div>
                    </div>
                    <div className="pb-item">
                            <div className="pb-text">
                                <h4>Gandhinagar University Newsletter</h4>
                                <p>A Newsletter is like a mirror which reflects the clear picture of all sorts of activities undertaken by the university. GU – Newsletter, is a living document of the Gandhinagar University published quarterly, carrying mosaic of intellectual contributions, activities, events, seminars, workshops, achievements, guest lectures, co-curricular and extra co-curricular activities, experiences and much more. It chronicles the activities and achievements of the university. It is a genuine reflection of the major accomplishments of the University. It develops writing skills among students in particular and teaching faculty in general.</p>
                                <div className="pb-inner-img">
                                    <img src={Publicationsimg1} alt="" />
                                </div>
                            </div>
                            <div className="pb-book">
                            <div className="ppb-list">
                                {publications.map((publication, index) => (
                                <div className="ppb-item" key={index}>
                                    <div className="ppb-img">
                                    <div className="ppb-img stick">
                                        <img src={publication.closeImg} alt="Closed Book" />
                                    </div>
                                    <div className="ppb-img upstick">
                                        <img src={publication.openImg} alt="Open Book" />
                                    </div>
                                    </div>
                                    <div className="ppb-text">
                                    <h4>{publication.title}</h4>
                                    </div>
                                </div>
                                ))}
                            </div>
                            </div>
                    </div>
                </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicationsBook;
