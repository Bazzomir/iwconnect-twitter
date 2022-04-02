import React, {useEffect} from 'react';
import {PostComment} from '../../containers/Home/components/Main/types';
import {usePostComment} from '../../hooks/usePostComment';

interface Props {
  show?: boolean;
  onClose: () => void;
}

export const Modal = ({show}: Props) => {
  const {commentsData: comments, fetchPostsComments} = usePostComment<PostComment[]>(
    'comments',
    []
  );

  useEffect(() => {
    fetchPostsComments();
  }, []);

  console.log('commentsData', comments);

  return (
    <div className="modal" tabIndex={-1} role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div>
  //     <div className="modal display-block" id="myModal">
  //       <div className="modal-dialog">
  //         <div className="modal-content">
  //           <div className="modal-header">
  //             <h4 className="modal-title">Modal Heading</h4>
  //             <button
  //               type="button"
  //               className="close"
  //               data-dismiss="modal"
  //               onClick={() => {
  //                 show = false;
  //               }}
  //             >
  //               &times;
  //             </button>
  //           </div>
  //           <div className="modal-body">Modal body..</div>
  //           <div className="modal-footer">
  //             <button type="button" className="btn btn-danger" data-dismiss="modal">
  //               Close
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};
