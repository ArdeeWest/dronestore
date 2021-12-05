document.addEventListener('DOMContentLoaded', function(){ 
    let options = {
        endPlug: 'behind',
        color: 'rgba(10, 9, 81, 0.5)',
        dash: {len: 9, gap: 9},
        size: 2
    };

    // first -orange- line 
    new LeaderLine(
      document.getElementById('box-orange'),
      document.getElementById('point-orange'),
      Object.assign({
            endSocket: 'top',
            path: 'grid'
        },
        options
        )
    );

    // second -green- line
    new LeaderLine(
        document.getElementById('box-green'),
        document.getElementById('point-green'),
        Object.assign({
              endSocket: 'auto',
              path: 'straight'
          },
          options
          )
      );

    // third -blue- line 
    new LeaderLine(
        document.getElementById('box-blue'),
        document.getElementById('point-blue'),
        Object.assign({
              endSocket: 'bottom',
              path: 'grid'
          },
          options
          )
      );

    // fourth -red- line 
    new LeaderLine(
        document.getElementById('box-red'),
        document.getElementById('point-red'),
        Object.assign({
              endSocket: 'top',
              path: 'grid'
          },
          options
          )
      );

    // fifth -pink- line
    new LeaderLine(
        document.getElementById('box-pink'),
        document.getElementById('point-pink'),
        Object.assign({
              endSocket: 'auto',
              path: 'straight'
          },
          options
          )
      );

    // sixth -dark-blue- line 
    new LeaderLine(
        document.getElementById('box-dark-blue'),
        document.getElementById('point-dark-blue'),
        Object.assign({
              endSocket: 'bottom',
              path: 'grid'
          },
          options
          )
      );

  });