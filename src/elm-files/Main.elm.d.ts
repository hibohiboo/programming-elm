export namespace Elm {
  namespace Main {
    interface Args {
      node: HTMLElement
      flags?: Flags
    }

    interface Flags {
      initialValue: string
    }

    function init(args: Args)
  }
}
