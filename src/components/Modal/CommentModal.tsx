// import React, {useEffect, useState} from 'react';
// import {Modal} from 'react-bootstrap';
// import {usePostComment} from '../../hooks/usePostComment';
// import {PostComment} from '../../containers/Home/components/Main/types';
// import {PostType} from '../../containers/Home/components/Main/types';
// import {AddTweet} from '../../containers/Home/components/Main/components/AddTweet/AddTweet';
// import {FetchPosts} from '../../hooks/useFetch';

// interface Props {
//   title?: string;
//   body?: string;
//   id?: number;
//   userId?: number;
// }

// export const CommentModal = ({title, body, id, userId}: Props) => {
//   const [showComments, setShowComments] = useState<boolean>(false);
//   const toggleModal = () => setShowComments(!showComments);

//   const {commentsData: comments, fetchPostsComments} = usePostComment<PostComment[]>(id, []);
//   const {data: posts, FetchFromApi, addNewTweet} = FetchPosts<PostType[]>('posts', []);

//   useEffect(() => {
//     fetchPostsComments();
//   }, []);

//   return (
//     <Modal
//       show={showComments}
//       onHide={() => {
//         setShowComments(false);
//       }}
//     >
//       <Modal.Dialog>
//         <Modal.Header style={{backgroundColor: 'black', color: 'white'}}>
//           Comments for post - {title}
//         </Modal.Header>
//         <Modal.Body style={{backgroundColor: 'black', color: 'white'}}>
//           {comments?.map(comment => {
//             return (
//               <div className="row" style={{borderBottom: '5px solid green'}}>
//                 <div className="col-12 font-weight-bold">
//                   <img
//                     src="https://i.pravatar.cc/100"
//                     style={{
//                       width: '50px',
//                       height: '50px',
//                       borderRadius: '100%',
//                       marginRight: '10px',
//                       marginTop: '5px',
//                     }}
//                     alt=" "
//                   />
//                   Title: ({comment?.id}) - {comment?.name}
//                 </div>
//                 <div className="col-12 mb-3">
//                   <span className="font-weight-bold">Body:</span> {comment?.body}
//                 </div>
//               </div>
//             );
//           })}
//           <AddTweet addNewTweet={addNewTweet} />
//         </Modal.Body>
//       </Modal.Dialog>
//     </Modal>
//   );
// };

export {};
