const FolderIcon = () => {
  return (
    <div className="relative w-20 h-16">

      {/* Folder Tab */}

      <div
        className="
        absolute
        top-0
        left-2
        w-8
        h-3
        rounded-t-md
        bg-yellow-300
        "
      />

      {/* Folder */}

      <div
        className="
        absolute
        bottom-0
        w-full
        h-14
        rounded-lg
        bg-gradient-to-b
        from-yellow-300
        to-yellow-500
        shadow-lg
        "
      >
        {/* Highlight */}

        <div
          className="
          absolute
          top-2
          left-2
          w-12
          h-2
          rounded-full
          bg-white/60
          "
        />
      </div>

    </div>
  );
};

export default FolderIcon;