import React from "react";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const FAQ = () => {
  return (
    <>
      <div className="flow-root mb-[30%] max-w-[80vw] mx-auto">
        {/* Added max-width for 80vw and centered */}
        <div className="-my-8 divide-y divide-gray-100">
          {/* FAQ 1 */}
          <details
            className="group py-8 [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between text-gray-900">
              <h2 className="text-lg font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h2>
              <span className="relative size-5 shrink-0">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 bg-[#6d53fd] text-white rounded-full p-1 cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faMinus}
                  className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 bg-[#6d53fd] text-white rounded-full p-1 cursor-pointer"
                />
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700 font-bold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>

          {/* FAQ 2 */}
          <details className="group py-8 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="text-lg font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h2>
              <span className="relative size-5 shrink-0">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 bg-[#6d53fd] text-white rounded-full p-1 cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faMinus}
                  className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 bg-[#6d53fd] text-white rounded-full p-1 cursor-pointer"
                />
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700 font-bold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>

          {/* FAQ 3 */}
          <details className="group py-8 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="text-lg font-bold">
                Lorem ipsum dolor sit amet consecteboldipisicing?
              </h2>
              <span className="relative size-5 shrink-0">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 bg-[#6d53fd] text-white rounded-full p-1 cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faMinus}
                  className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 bg-[#6d53fd] text-white rounded-full p-1 cursor-pointer"
                />
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700 font-bold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>

          {/* FAQ 4 */}
          <details className="group py-8 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="text-lg font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h2>
              <span className="relative size-5 shrink-0">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 bg-[#6d53fd] text-white rounded-full p-1 cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faMinus}
                  className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 bg-[#6d53fd] text-white rounded-full p-1 cursor-pointer"
                />
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700 font-bold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>

          {/* FAQ 5 */}
          <details className="group py-8 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="text-lg font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h2>
              <span className="relative size-5 shrink-0">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 bg-[#6d53fd] text-white rounded-full p-1 cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faMinus}
                  className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 bg-[#6d53fd] text-white rounded-full p-1 cursor-pointer"
                />
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700 font-bold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>
        </div>
      </div>
    </>
  );
};

export default FAQ;
